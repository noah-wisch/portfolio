const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('gulp-browser');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', () => {
    gulp.src('templates/*.html')
        .pipe(gulp.dest('public/templates'));

    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('css', () => {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/'));
});

gulp.task('js', () => {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', ['default'], () => {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('js/*/*.js', ['js']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('*.html', ['html']);
    gulp.watch('templates/*.html', ['html']);
    gulp.watch('assets/*', ['html']);
});