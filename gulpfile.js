const path = require('path');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const karma = require('karma').Server;
const server = require('gulp-live-server');
const protractor = require('gulp-protractor').protractor;

gulp.task('server', function() {
	var live = new server('server.js');
	live.start();
});

gulp.task('serve', ['server'], function() {
	browserSync.init({
		notify: false,
		port: 8081,
		server: {
			baseDir: ['app'],
			routes: {
				'/browser_components': 'components',
				'/app/public': 'public'
			}
		}
	});
	gulp.watch(['app/**/*.*'])
		.on('change', browserSync.reload);
});


gulp.task('serve-test', function() {
	browserSync.init({
		notify: false,
		port: 8082,
		server: {
			baseDir: ['test', 'app'],
			routes: {
				'/bower_components': 'components',
				'/app/public': 'public'
			}
		}
	})
});

gulp.task('test-browser', function(done) {
	karma.start({
		configFile: path.join(__dirname + '/karma.conf.js'),
		singleRun: true,
		reporters: ['coverage','mocha']
	}, function() {
		done();
	})
});

gulp.task('serve-coverage', ['test-browser'], function() {
	browserSync.init({
		notify: false,
		port: 7777,
		server: {
			baseDir: ['test/coverage'],
		}
	});
	gulp.watch(['app/**/*.*'])
		.on('change', browserSync.reload)
});

gulp.task('protractor', ['serve'], function(done) {
	return gulp.src(['test/e2e/*.js'])
		.pipe(protractor({
			configFile: "test/e2e/protractor-conf.js",
			args: ['--baseUrl', 'http://localhost:8000']
		}))
		.on('end', done)
});

gulp.task('default', ['serve']);
