var gulp 			= require('gulp');
var jade 			= require('gulp-jade');
var browserify 		= require('gulp-browserify');

gulp.task('jade', function() {
	return gulp.src('src/templates/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('builds/development'));
});

gulp.task('js', function() {
	return gulp.src('src/js/main.js')
	.pipe(browserify({ debug: true }))
	.pipe(gulp.dest('builds/development/js'));
});

gulp.task('default', ['jade', 'js']);
