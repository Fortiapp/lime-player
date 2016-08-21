/**
 * Created by Shahid on 12/21/2015.
 */

/**
 * ------------------------------------------------------------------------------------
 * Declare Gulp Modules
 * ------------------------------------------------------------------------------------
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var babel = require('gulp-babel');

var scripts = [
  'src/**/*.js'
];


var styles = [
  'styles/main.css'
];


/**
 * ------------------------------------------------------------------------------------
 * Tasks Definitions
 * ------------------------------------------------------------------------------------
 */
gulp.task('javascript', ['es6'], javaScriptTask);
gulp.task('styles', stylesTask);
gulp.task('watch', watchFiles);
gulp.task('build', ['javascript', 'styles'], cleanTempFolder);
gulp.task('es6', es6Task);
gulp.task('default', ['build'], watchFiles);
gulp.task('cleanTempFolder', cleanTempFolder);


/**
 * ------------------------------------------------------------------------------------
 * Compile Typescript to Javascript
 * ------------------------------------------------------------------------------------
 *
 * @returns {JQueryPromise<any>}
 */
function es6Task() {

  return gulp.src(scripts)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('.tmp'));
}

/**
 * ------------------------------------------------------------------------------------
 * clean the temporary folder
 * ------------------------------------------------------------------------------------
 *
 * @returns {JQueryPromise<any>|*}
 */
function cleanTempFolder() {
  // Delete Temp Files & Folders
  del(['.tmp/**']);
}

/**
 * ------------------------------------------------------------------------------------
 * Concat and minify JavaScripts
 * ------------------------------------------------------------------------------------
 *
 * @returns {*}
 */
function javaScriptTask() {

  var scriptsList = '.tmp/*.js';

  gulp.src(scriptsList)
    .pipe(sourcemaps.init())
    .pipe(concat('lime-player.js'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('dist/'));

  gulp.src(scriptsList)
    .pipe(sourcemaps.init())
    .pipe(concat('lime-player.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('dist/'));
}

/**
 * ------------------------------------------------------------------------------------
 * Concat and minify style sheets
 * ------------------------------------------------------------------------------------
 *
 * @returns {*}
 */
function stylesTask() {
  gulp.src(styles)
    .pipe(sourcemaps.init())
    .pipe(concat('lime-player.css'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('dist/'));

  gulp.src(styles)
    .pipe(sourcemaps.init())
    .pipe(concat('lime-player.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('dist/'));

}


/**
 * ------------------------------------------------------------------------------------
 * Trigger file watcher for any change to re compile
 * ------------------------------------------------------------------------------------
 *
 */
function watchFiles() {
  var taskList = [];
  taskList = taskList.concat(scripts, styles);
  return gulp.watch(taskList, ['build']);
}
