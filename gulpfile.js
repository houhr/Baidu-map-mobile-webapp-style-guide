'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr(),
    minifyCSS = require('gulp-minify-css');

var exec = require('child_process').exec,
    child = null;

// Compile Sass
gulp.task('sass', function() {

    gulp.src('./stylesheets/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./stylesheets/css'))
        .pipe(livereload(server));

    gulp.src('./stylesheets/scss/base-styles.scss')
        .pipe(sass())
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest('./public/'))
        .pipe(livereload(server));

    gulp.src('./stylesheets/scss/extension-styles.scss')
        .pipe(sass())
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest('./public/'))
        .pipe(livereload(server));

    gulp.src('./stylesheets/scss/list.scss')
        .pipe(sass())
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest('./public/'))
        .pipe(livereload(server));

    gulp.src('./stylesheets/scss/tab-secondary.scss')
        .pipe(sass())
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest('./public/'))
        .pipe(livereload(server));

    gulp.src('./stylesheets/scss/thumbnail.scss')
        .pipe(sass())
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest('./public/'))
        .pipe(livereload(server));

    gulp.src('./stylesheets/scss/sg.scss')
        .pipe(sass())
        .pipe(gulp.dest('./stylesheets/css'))
        .pipe(livereload(server));

});

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

// Autoprefixer
gulp.task('prefix', function () {
    gulp.src('./public/*.css')
        .pipe(prefix('last 2 version', '> 1%', 'iOS >=6', 'Android >= 2.3'))
        .pipe(gulp.dest('./public'));
});

gulp.task('compole-kss', function () {
    child = exec('rm styleguide/public/*.css', function () {
    });
    // Auto re-compile kss
    child = exec('kss-node stylesheets/css/ styleguide --css stylesheets/css/main.css --template styleguide/template/', function () {

    });
});

gulp.task('minify-css', function() {
  gulp.src('./stylesheets/css/main.css')
    .pipe(minifyCSS({keepSpecialComments: 0}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', function(){

    gulp.run('lr-server', 'sass', 'compole-kss', 'minify-css');

    // Watch For Changes To SCSS
    gulp.watch(['./stylesheets/scss/*.scss', './stylesheets/css/styleguide.md'], function(){

        gulp.run('sass', 'compole-kss', 'minify-css');


    });

});
