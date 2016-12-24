const path = require('path');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const karma = require('karma').Server;
const server = require('gulp-live-server');
const protractor = require('gulp-protractor').protractor;

gulp.task('server', function() {
	var live = new server('server.js');
	live.stop();
	live.start();
});

gulp.task('serve', ['server'], function() {
	browserSync.init({
		notify: false,
		port: 8081,
		proxy: 'localhost:9000'
		//server: {
			//baseDir: ['app'],
			//routes: {
				//'/public': 'app/public',
				//'/components': 'bower_components'
			//}
		//}
	});
	gulp.watch(['app/**/*.*','server.js', 'routes/**/*.*'])
		.on('change', browserSync.reload);
});


gulp.task('serve-test', function() {
	browserSync.init({
		notify: false,
		port: 8082,
		server: {
			baseDir: ['test', 'app'],
			routes: {
				'/public': 'app/public',
				'/components': 'bower_components',
				'/bower_components': 'bower_components'
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
