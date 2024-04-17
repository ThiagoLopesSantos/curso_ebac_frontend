//importações
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function sassCompilation(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            //comprimindo o arquivo
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps')) //fazendo o mapeamento do codigo fonte para o navegador
        .pipe(gulp.dest('./build/styles'));
}

function imageCompressor() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function javaScriptCompressor() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(sassCompilation));
    gulp.watch('./source/styles/config/*.scss', {ignoreInitial: false}, gulp.series(sassCompilation));
    gulp.watch('./source/images/*',{ ignoreInitial: false}, gulp.series(imageCompressor));
    gulp.watch('./source/scripts/*.js',{ ignoreInitial: false}, gulp.series(javaScriptCompressor));
}