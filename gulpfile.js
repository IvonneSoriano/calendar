const { src, dest, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
//const less = require('gulp-less');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
  return src('client/templates/*.pug')
    .pipe(pug())
    .pipe(dest('build/html'))
}

function css() {
  return src('sass/*.scss')
    .pipe(sass())
    .pipe(dest('css/build'))
}
function cssmin() {
  return src('sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('css'))
}
// function js() {
//   return src('js/*.js', { sourcemaps: true })
//     .pipe(concat('main.min.js'))
//     .pipe(dest('js', { sourcemaps: true }))
// }

function watchTask(){
  return watch(['sass/others/*.scss'], parallel(css));
}
exports.css = css; 
exports.cssmin = cssmin;  
exports.default = watchTask;
//exports.js = js;
//exports.html = html;
//exports.default = parallel(html, css, js);