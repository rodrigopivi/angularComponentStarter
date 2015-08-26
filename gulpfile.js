(function() {﻿
  'use strict';
  /* ***** CUSTOM CONFIGURATION PROPERTIES. ***** */
  // note: should match the main angular module name (used by ng-template)
  var moduleName = 'starter.angular.component',
    devServerPort = 5000,
    paths = {
      html: 'lib/**/*.html',
      libScripts: ['lib/**/*.js', '!lib/**/tests/*.js'], // ignore tests dir
      testsDest: 'dist/tests',
      testsOrig: 'lib/**/tests/*.js',
      js: ['lib/**/*.js', 'demo/**/*.js'],
      less: 'lib/**/*.less',
      dest: 'dist',
      livereload: ['dist/**/*.*', 'index.html', 'demo/**/*.*', '!dist/**/tests/*.js', '!demo/**/*Specs.js']
    };

  /* ***** LOAD DEPENDENCIES ***** */
  var del = require('del'),
    gulp = require('gulp'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat-util'),
    browserSync = require('browser-sync').create(),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    minifyHtml = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    ngTemplate = require('gulp-ng-template'),
    rename = require('gulp-rename'),
    sourceMaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    pkg = require('./package.json'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    karma = require('karma').Server;

  /* *********** ERROR HANDLING *********** */
  var handleError = function(task) {
    return function(err) {
      notify.onError({ message: task + ' failed, check the logs..', sound: false })(err);
      gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
    };
  };
  /* *********** TASKS METHODS *********** */
  var tasks = {
    clean: function(callback) { del([paths.dest + '/**/*.*'], callback); },
    bower: function() { return bower({ cmd: 'update' }); },
    less: function() {
      return gulp.src(paths.less)
        .pipe(sourceMaps.init())
        .pipe(less({ compress: true }))
        .pipe(concat(pkg.name + '.css'))
        .pipe(gulp.dest(paths.dest))
        .pipe(minifyCSS({ keepBreaks: false }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(paths.dest));
    },
    templates: function() {
      return gulp.src(paths.html)
        .pipe(minifyHtml({ empty: true, quotes: true }))
        .pipe(ngTemplate({
          moduleName: moduleName,
          standalone: false,
          filePath: (pkg.name + '.tpl.js'),
          prefix: 'lib/',
        }))
        .pipe(gulp.dest(paths.dest));
    },
    concatTests: function() {
      return gulp.src(paths.testsOrig)
        .pipe(sourceMaps.init())
        .pipe(concat(pkg.name + '.js'))
        .pipe(gulp.dest(paths.testsDest))
        .pipe(sourceMaps.write('./'))
        .on('error', handleError);
    },
    karma: function(done) {
      var karmaServer = new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
      }, function() { return done(); });
      return karmaServer.start();
    },
    concatScripts: function() {
      return gulp.src(paths.libScripts)
        .pipe(sourceMaps.init())
        .pipe(concat(pkg.name + '.js'))
        .pipe(gulp.dest(paths.dest))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(paths.dest))
        .on('error', handleError);
    },
    watch: function() {
      gulp.watch(paths.libScripts, ['jshint', 'concat-scripts']);
      gulp.watch(paths.less, ['less']);
      gulp.watch(paths.testsOrig, ['jshint', 'test']);
      gulp.watch(paths.html, ['templates']);
      gulp.watch(paths.livereload, ['reload-browser']);
    },
    jshint: function() {
      return gulp.src(paths.js)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
    },
    reloadBrowser: function() { browserSync.reload(); },
    startServer: function() {
      browserSync.init({ port: devServerPort, server: { baseDir: './', } });
    }
  };

  /* *********** GULP TASKS *********** */
  gulp.task('clean', tasks.clean);
  gulp.task('concat-tests', tasks.concatTests);
  gulp.task('karma', tasks.karma);
  gulp.task('test', function(callback) { runSequence('concat-tests', 'karma', callback); });
  gulp.task('bower', tasks.bower);
  gulp.task('less', tasks.less);
  gulp.task('update', function(callback) { runSequence('bower', callback); });
  gulp.task('templates', tasks.templates);
  gulp.task('concat-scripts', tasks.concatScripts);
  gulp.task('concat', function(callback) {
    runSequence(['less', 'templates', 'jshint', 'concat-scripts'], 'test', callback);
  });
  gulp.task('jshint', tasks.jshint);
  gulp.task('build', function(callback) { runSequence('clean', 'update', 'concat', callback); });
  gulp.task('start-server', tasks.startServer);
  gulp.task('reload-browser', tasks.reloadBrowser);
  gulp.task('watch', tasks.watch);
  gulp.task('dev', function(callback) { runSequence('concat', 'start-server', 'watch', callback); });
  gulp.task('default', ['build']);
})();
