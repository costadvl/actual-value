# actual-value
Install global variables
npm install -g protractor gulp
## Protractor
Protractor is an end-to-end test framework for **AngularJS** aplications.
It needs a **spec** and a **configuration** file

## Karma
Karma is the perfect tool for **unit testing**
[Read more about angular testing](https://www.yearofmoo.com/2013/09/advanced-testing-and-debugging-in-angularjs.html)
```
npm install --save-dev karma [PLUGINS THE APP NEEDS]
```
###Configuration file
The connecton between your project and karma is the **configuration** file.
You can generate it by:
```
karma init my.conf.js
```
Or create your own one. [Karma configuration file documentation](http://karma-runner.github.io/1.0/config/configuration-file.html)

###Istambul for testing coverage
JavaScript code coverage tool that computes statement, line, function and branch.
```
npm install --save-dev istanbul karma-coverage
```
In the karma configuration file you wil have to specify the reporter, coverageReporter and the files options. [Read more about preprocessors](https://karma-runner.github.io/1.0/config/preprocessors.html)

In case you whant to run istambul coverage with mocha you will have to install some extra dependecies.
```
npm install --save-dev karma-mocha karma-mocha-reporter 
```

For terminal use of karma install:
```
npm install -g karma-cli
```
