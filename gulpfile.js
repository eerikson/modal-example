'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var babelify = require('babelify');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');

var watchify = require('watchify');
var assign = require('lodash.assign');
var gutil = require('gulp-util');

var paths = {
	src : {
		scripts : './src/js/',
		styles : './src/css/'
	},
	dist : {
		scripts : './dist/js/',
		styles : './dist/css/'
	}
};

/*
*  Run a simple local webserver.
*  Use port 80, which looks prettier, but requires admin privileges.
*
*/
gulp.task('server', function() {
	connect.server({
		root: 'dist',
		port: 80
  });
});



// 
var customOpts = {
	entries: [ paths.src.scripts + 'main.js'],
	extensions : ['.jsx'],
	debug: true,
	fast: true
};
var opts = assign({}, watchify.args, customOpts);
var bsfy = watchify( browserify(opts).transform( 'babelify', { presets: [ 'es2015', 'react' ] } ) );

/*
*  Scripts task.
*  - Browserify for CommonJS dependencies & concatenation.
*  - Use 'reactify' transform for React compatibility.
*  - (disabled) Generate source maps.
*/

gulp.task('scripts', ['lint'], function () {
	
	function bundle() {
		return bsfy.bundle()
			// .on('error', gutil.log )
			.on( 'error', function( args ) {
				console.error("Error!", arguments[0] );
			})
			.pipe( source('main.js') )
			.pipe( buffer() )
			.pipe( gulp.dest( paths.dist.scripts ) );
	}
	
	
	bsfy.on('update', bundle );
	bsfy.on('log', gutil.log );
	return bundle();
	
});


// Ripped from https://github.com/adametry/gulp-eslint
gulp.task('lint', function () {
	return gulp.src( [ paths.src.scripts + 'components/**/*.*' ] )
		.pipe(eslint({
			'extends': 'eslint:recommended',
			'parserOptions' : {
				'ecmaFeatures': {
					'jsx' : true,
					'impliedStrict' : true
				},
				'ecmaVersion' : 6,
				'sourceType' : 'module'
			},
			'globals': {
				'window': true,
				'document' : true,
				'console' : true,
				'process' : true
			},
			'rules': {
				'no-unused-vars' : 0, // Pretty tough to use with React
				'no-console' : 1, // Just warn about these, shouldn't have them
				'no-undef' : 0
			}
		}))
		.pipe(eslint.format() )
		.pipe(eslint.failAfterError());
});

gulp.task('styles', function () {
  return gulp.src(paths.src.styles + '/main.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
	.pipe(gulp.dest(paths.dist.styles));
});




/*
*  Watch styles for changes.
*/
gulp.task('watch-styles', function() {
  gulp.watch(paths.src.styles + '**/*.*', ['styles']);
});

/*
*  Default task.
*/
gulp.task('default', ['watch-styles', 'scripts', 'styles']);
