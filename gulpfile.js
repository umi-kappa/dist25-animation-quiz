var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var webpackStream = require("webpack-stream");
var webpack = require("webpack");

// webpackの設定ファイルの読み込み
var webpackConfig = require("./webpack.config");

gulp.task('webpack', function () {
	return webpackStream(webpackConfig, webpack)
		.pipe(gulp.dest("dist"));
});

gulp.task('watch', function () {
	gulp.watch('./src/**/*.ts', ['webpack']);
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch("./dist/*.js").on('change', browserSync.reload);
  gulp.watch("./dist/assets/css/*.css").on('change', browserSync.reload);
  gulp.watch("./dist/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function(){
  gulp.src('./src/scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./dist/assets/css/'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
});

gulp.task('default', ['webpack','watch','browser-sync']);