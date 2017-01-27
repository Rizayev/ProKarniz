var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe( sass() )
        .pipe(autoprefixer(['last 15 version']), ' > 1%', 'ie 8', 'ie 7', { cascade: true})
        .pipe( gulp.dest('app/css') )
        .pipe( browserSync.reload( { stream:true } ) )
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir : 'app',
        },
        notify: false
    });
});

gulp.task('watch',['browserSync'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});