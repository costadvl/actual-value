module.exports = function(config) {
	config.set({
		 //plugins: ['karma-mocha','karma-coverage', 'karma-phantomjs-launcher'],
		browsers: ['PhantomJS'],
		frameworks: ['mocha'],
		preprocessors: {
			'app/**/*.js': ['coverage']
		},
		coverageReporter: {
			includeAllSources: true,
			reporters: [{
				type: 'html',
				dir: 'test/coverage',
				subdir: '.'
			}, {
				type: 'text',
			}]
		},
		//include files for coverage
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/chai/chai.js',

			'app/**/*.js',

			'test/*.js'
		],
	})
}
