const gulp     = require('gulp');
const newer    = require('gulp-newer');
const through  = require('through2');
const argv     = require('yargs').argv;
const request  = require('request');
let isTemplate = __dirname.indexOf('/ultimate-jekyll/') > -1;
let isServer   = (argv.buildLocation == 'server');

gulp.task('sample', function() {
  // write your first task here!
  // then set up 'watch' tasks in the app.config.js
});
