const gulp = rquire('gulp');
const browserSync = require('browser-sync');
const karma = require('karma');
const server = require('gulp-live-server');
const protractor = require('gulp-protractor').protractor;

gulp.task('server', function () {
	var live = new server('server.js');
	live.start();
});
	 
gulp.task('serve', ['serve'], function(){
	browserSync.init({
		notify: false,
		port: 8080,
		server: {
			baseDir: ['app'],
			routes: {
				'/bower_components':'bower_components',
			}
		}
	});
	gulp.watch(['app/**.*'])
		.on('change', browserSync.reload);
});

