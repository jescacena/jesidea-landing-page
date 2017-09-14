var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var connect = require('gulp-connect');
var prompt = require('gulp-prompt');
var gutil = require('gulp-util');
var minifyCss = require('gulp-minify-css');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var hash = require('gulp-hash');
var imagemin = require('gulp-imagemin');
var fs = require('fs');
var path = require('path');
var pngquant = require('imagemin-pngquant');
var replace = require('gulp-replace');
var revReplace = require('gulp-rev-replace');
var rev = require('gulp-rev');
var filter = require('gulp-filter');
var runSequence = require('run-sequence');


gulp.task("build-assets", function() {
  var jsFilter = filter("js/**/*.js", { restore: true });
  var cssFilter = filter("css/**/*.css", { restore: true });
  var nonIndexHtmlFilter = filter(['**/*', '!**/index.html'], { restore: true });

  return gulp.src("./index.html")
    .pipe(useref())      // Concatenate with gulp-useref
    .pipe(jsFilter)
    .pipe(uglify())             // Minify any javascript sources
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(cssFilter.restore)
    .pipe(nonIndexHtmlFilter)
    .pipe(rev())                // Rename the concatenated files (but not index.html)
    .pipe(nonIndexHtmlFilter.restore)
    .pipe(revReplace())         // Substitute in new filenames
    .pipe(gulp.dest('dist'));
});

gulp.task('js-libs-copy', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.min.js',
    'bower_components/foundation/js/foundation.min.js'])
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

gulp.task('build:dist', ['build-assets', 'js-libs-copy', 'image-build'],  function() {
    gulp.src('dist/index.html')
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
