'use strict'
// "indentation": 2

var gulp = require('gulp')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var scss = require('postcss-scss')
var reporter = require('postcss-reporter')
var stylelint = require('stylelint')

var notify = require('gulp-notify')
var test = 'you have error'

var stylelintConfig = require('./stylelint.json')

var processors = [
  stylelint(stylelintConfig),
  reporter({clearMessages: true})
]

gulp.task('sass:lint', function () {
  return gulp.src('./main.scss')
    .pipe(postcss(processors, { syntax: scss }))
})

gulp.task('sass', ['sass:lint'], function () {
  return gulp.src('./main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
})
