const gulp = require('gulp');
const browserSync = require('browser-sync');
const karma = require('karma');
const server = require('gulp-live-server');
const protractor = require('gulp-protractor').protractor;

gulp.task('server', function () {
	var live = new server('server.js');
	live.start();
});
	 
gulp.task('serve', ['server'], function(){
	browserSync.init({
		notify: false,
		port: 8081,
		proxy: 'localhost:8080'
	});
	gulp.watch(['app/**.*'])
		.on('change', browserSync.reload);
});

gulp.task('default',['serve']);

