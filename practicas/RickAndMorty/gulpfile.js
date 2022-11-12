const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

function css(done) {
  src('scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('css'));
  done();
}
function dev(done) {
  watch('scss/style.scss', css);
  done();
}
exports.css = css;
exports.dev = dev;
