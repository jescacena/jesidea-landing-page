var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var connect = require('gulp-connect');
var prompt = require('gulp-prompt');
var gutil = require('gulp-util');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var fs = require('fs');
var path = require('path');
var pngquant = require('imagemin-pngquant');
var replace = require('gulp-replace');

gulp.task('js-libs-copy', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.min.js', 'bower_components/foundation/js/foundation.min.js'])
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js-build', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('image-build', function() {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('css-build', function() {
    return gulp.src('css/*.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build:dist', ['js-build', 'js-libs-copy','css-build', 'image-build'],  function() {
    gulp.src('*.html')
        .pipe(replace('bower_components/jquery/dist/', 'js/'))
        .pipe(replace('bower_components/foundation/js/', 'js/'))
        .pipe(gulp.dest('dist'));

});

gulp.task('deploy', ['build:dist'], function () {
    return gulp.src('/')//it may be anything
        .pipe(prompt.prompt({
            type: 'password',
            name: 'pass',
            message: 'Please enter your password'
        }, function(res){

            var conn = ftp.create( {
                host:     'www.jesidea.com',
                user:     'jesidea.com',
                password: res.pass,
                parallel: 10,
                log:      gutil.log
            } );

            var globs = ['dist/**/*'];

            // using base = '.' will transfer everything to /public_html correctly
            // turn off buffering in gulp.src for best performance
            return gulp.src( globs, { buffer: false } )
                .pipe( conn.newer( '/home' ) ) // only upload newer files
                .pipe( conn.dest( '/home' ) );

        }));
});


// The default task (called when you run `gulp` from cli)
//gulp.task('default', ['generate-catalog', 'deploy:site']);