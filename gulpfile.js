"use strict";

var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var image = require("gulp-imagemin");
var autoprefixer = require("gulp-autoprefixer");
var browsersync = require("browser-sync").create();
var index = "src/components/**/*.pug";
var style = "src/components/**/style.scss";
var script = "src/components/scripts/*.js";
var pic = ["src/components/**/*.jp*g", "src/components/**/*.png"];

gulp.task("pug", function () {
  return gulp
    .src("src/index.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("build"))
    .on("end", browsersync.reload);
});

gulp.task("css_concat", function () {
  return gulp.src(style).pipe(concat("style.scss")).pipe(gulp.dest("src/"));
});

gulp.task("sass", function () {
  return gulp
    .src("src/style.scss")
    .pipe(sass({ outputStyle: "normal" }).on("error", sass.logError))
    .pipe(autoprefixer(["last 10 versions"]))
    .pipe(gulp.dest("build"))
    .pipe(
      browsersync.reload({
        stream: true,
      })
    );
});

gulp.task("boots", function () {
  return gulp
    .src("src/components/bootstrap/scss/bootstrap.scss")
    .pipe(sass({ outputStyle: "normal" }).on("error", sass.logError))
    .pipe(autoprefixer(["last 10 versions"]))
    .pipe(gulp.dest("build"))
    .pipe(
      browsersync.reload({
        stream: true,
      })
    );
});

gulp.task("script", function () {
  return gulp.src(script).pipe(concat("script.js")).pipe(gulp.dest("build/"));
});

gulp.task("img", function () {
  return gulp
    .src(pic)
    .pipe(
      image({
        progressive: true,
      })
    )
    .pipe(gulp.dest("build/img/"));
});

gulp.task("serve", function () {
  browsersync.init({
    server: "build",
    notify: false,
  });
});

gulp.task("watch", function () {
  gulp.watch(index, gulp.series("pug"));
  gulp.watch("src/components/header/index.pug", gulp.series("pug"));
  gulp.watch(style, gulp.series("css_concat"));
  gulp.watch(script, gulp.series("script"));
  gulp.watch(pic, gulp.series("img"));
  gulp.watch("src/style.scss", gulp.series("sass"));
  gulp.watch("src/components/bootstrap/scss/*.scss", gulp.series("boots"));
});

gulp.task(
  "default",
  gulp.series(
    gulp.parallel("pug", "sass", "boots", "script"),
    gulp.parallel("img", "serve", "watch")
  )
);
