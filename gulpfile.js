var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() { 
    return gulp.src('scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
})

gulp.task('watch',function(){
    gulp.watch('scss/*.scss',['default'])
});

gulp.task('sass', function() { 
    return gulp.src('scss/app.scss')
    .pipe(sass({
        outputStyle: 'compact',   // nested, expanded, compact
        sourceComments:'map'  //mapowanie komentarzy
        }))
    .pipe(gulp.dest('css')) ;; 
})

