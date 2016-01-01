var gulp  = require('gulp'),
	babel = require('gulp-babel')

// A task that transpiles es6 code to es5
gulp.task('es6to5', function () {
	return gulp.src('src/app.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'))
})

// The default task
gulp.task('default', ['es6to5'])
