const gulp = require('gulp');
const sass = require('gulp-sass');
// const babel = require('gulp-babel');
const browser = require('gulp-browser');
const strip = require('gulp-strip-comments');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', () => {
    gulp.src('templates/*.html')
        .pipe(gulp.dest('docs/templates'));

    gulp.src('assets/*')
        .pipe(gulp.dest('docs/'));

    return gulp.src('*.html')
        .pipe(strip.text())
        .pipe(gulp.dest('docs/'));
});

gulp.task('css', () => {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(strip.text())
        .pipe(gulp.dest('docs/'));
});

gulp.task('js', () => {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        .pipe(strip.text())
        .pipe(gulp.dest('docs/'));
});

gulp.task('watch', ['default'], () => {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('js/*/*.js', ['js']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('*.html', ['html']);
    gulp.watch('templates/*.html', ['html']);
    gulp.watch('assets/*', ['html']);
});
