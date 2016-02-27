var gulp = require('gulp'),
	minifyHTML = require('gulp-minify-html'),
	webserver = require('gulp-webserver'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	minifyCSS = require('gulp-minify-css');

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
		watch: 'src/styles/**/*.styl',
		output: './build/css'
	},
	scripts:{
		main: 'src/scripts/main.js',
		watch: 'src/scripts/**/*.html',
		output: './build/js'
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

gulp.task('watch', function(){
	gulp.watch(config.html.watch, ['build:html']);
	gulp.watch(config.styles.watch, ['build:css']);
});

gulp.task('build',['build:html', 'build:css']);
gulp.task('default', ['server', 'watch', 'build']);