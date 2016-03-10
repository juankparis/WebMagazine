var gulp = require('gulp'),
	minifyHTML = require('gulp-minify-html'),
	webserver = require('gulp-webserver'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	minifyCSS = require('gulp-minify-css'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	buffer =require('vinyl-buffer'),
	uglify = require('gulp-uglifyjs'),
	imageOP = require('gulp-image-optimization');

config ={
	rutserver:{
		watch: './build'
	},
	html:{
		main: './src/index.html',
		watch: './src/**/*.html',
		output: './build'
	},
	styles:{
		main: 'src/styles/estilos.styl',
		watch: ['src/styles/**/*.styl','src/styles/**/*.css'],
		output: './build/css'
	},
	scripts:{
		main: 'src/scripts/main.js',
		watch: 'src/scripts/**/*.js',
		output: './build/js'
	},
	images:{
		watch: ['build/images/**/*.png','build/images/**/*jpg'],
		output: 'dist/images'
	}
}

gulp.task('server', function(){
	gulp.src(config.rutserver.watch)
		.pipe(webserver({
			host: '0.0.0.0',
			port: 9000,
		}));
});

gulp.task('build:html', function(){
	gulp.src(config.html.main)
		.pipe(minifyHTML())
		.pipe(gulp.dest(config.html.output));
});

gulp.task('build:css', function(){
	gulp.src(config.styles.main)
		.pipe(stylus({
			use: nib(),
			'include css': true
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest(config.styles.output));
});

gulp.task('build:js', function(){
	return browserify(config.scripts.main)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest(config.scripts.output));
});

gulp.task('watch', function(){
	gulp.watch(config.html.watch, ['build:html']);
	gulp.watch(config.styles.watch, ['build:css']);
	gulp.watch(config.scripts.watch, ['build:js']);
	gulp.watch(config.images.watch, ['imageOP']);
});

gulp.task('imageOP', function(){
	gulp.src(config.images.watch)
		.pipe(imageOP({
			optimizationLevel: 5,
	        progressive: true,
	        interlaced: true
		}))
		.pipe(gulp.dest(config.images.output));
});

gulp.task('build',['build:html', 'build:css', 'build:js']);
gulp.task('default', ['server', 'watch', 'build']);