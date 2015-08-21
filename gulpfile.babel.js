'use strict';

import gulp from 'gulp';
import jshint from 'gulp-jshint';
import connect from 'gulp-connect';
import babel from 'gulp-babel';
import concat from 'gulp-concat';

gulp.task('js', () => {
  return gulp.src('app/**/*.js')
    .pipe(babel())
    .pipe(concat('pinndit.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', () => {
  gulp.watch('app/**/*.js', ['js']);
});

gulp.task('connect', () => {
  connect.server();
});

gulp.task('default', ['watch', 'js', 'connect']);
