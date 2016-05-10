// Gulp plugins
var gulp         = require('gulp'),
    $            = require('gulp-load-plugins')();
    compass      = require('gulp-compass');
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;
 
// Config
var AUTOPREFIXER_BROWSERS = ['last 2 versions'];
var ASSETS_DIR = './';
var SCSS_DIR = ASSETS_DIR + 'src/styles/';
var STYLES_DIR  = ASSETS_DIR + 'styles/';
var JS_DIR   = ASSETS_DIR + 'scripts/';
var JS_FILES = [
  ASSETS_DIR + 'src/scripts/app.js'
];
 
// Styles
gulp.task('styles', function() {
  return gulp.src(SCSS_DIR + '*.scss')
    .pipe($.compass({ compass: true, sourcemap: true, outputStyle: 'nested' }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(gulp.dest(STYLES_DIR));
});

gulp.task('styles', function() {
  return gulp.src(SCSS_DIR + '*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: STYLES_DIR,
      sass: SCSS_DIR,
    }))
    .pipe(gulp.dest(STYLES_DIR));
});
 
// Scripts
gulp.task('scripts', function() {
  return gulp.src(JS_FILES)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')))
    .pipe($.concat('main.js'))
    .pipe(gulp.dest(JS_DIR))
    .pipe(reload({ stream: true }));
});
 
gulp.task('serve', ['styles', 'scripts'], function() {
  browserSync({
      notify: false,
      server: {
        baseDir: './'
      },
      port: 9999,
    });
 
  gulp.watch(SCSS_DIR + '**/*.scss', ['styles', reload]);
  gulp.watch(JS_DIR + '**/*.js', ['scripts']);
  gulp.watch('**/*.html', reload);
});