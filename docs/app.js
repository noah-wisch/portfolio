(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('PortfolioApp', ['ui.router']);

const controllers = [
	require('./controllers/resume'),
	require('./controllers/about'),
	require('./controllers/portfolio'),
];

for (let i = 0; i < controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].func);
}

const components = [
	require('./components/about'),
	require('./components/portfolio'),
	require('./components/resume'),
];

for (let i = 0; i < components.length; i++) {
	app.component(components[i].name, components[i].func);
}

const routes = require('./routes');

app.config($stateProvider => {
	for (let i = 0; i < routes.length; i++) {
		$stateProvider.state(routes[i]);
	}
});


},{"./components/about":2,"./components/portfolio":3,"./components/resume":4,"./controllers/about":5,"./controllers/portfolio":6,"./controllers/resume":7,"./routes":8}],2:[function(require,module,exports){
module.exports = {
	name: 'about',
	func: {
		templateUrl: 'templates/about.html',
	},
};
},{}],3:[function(require,module,exports){
module.exports = {
	name: 'portfolio',
	func: {
		templateUrl: 'templates/portfolio.html',
	},
};
},{}],4:[function(require,module,exports){
module.exports = {
	name: 'resume',
	func: {
		templateUrl: 'templates/resume.html',
	},
};
},{}],5:[function(require,module,exports){
module.exports = {
	name: 'AboutController',
	func($scope, $location) {
		$scope.isActive = (viewLocation) => {
			return viewLocation === $location.path();
		};
	},
};
},{}],6:[function(require,module,exports){
module.exports = {
	name: 'PortfolioController',
	func($scope, $location) {
		$scope.isActive = (viewLocation) => {
			return viewLocation === $location.path();
		};
	},
};
},{}],7:[function(require,module,exports){
module.exports = {
	name: 'ResumeController',
	func($scope, $location) {
		$scope.isActive = (viewLocation) => {
			return viewLocation === $location.path();
		};
	},
};
},{}],8:[function(require,module,exports){
module.exports = [
     {
        name: 'home',
        url: '/',
    },
    {
        name: 'about',
        url: '/about',
        component: 'about',
    },
    {
        name: 'resume',
        url: '/resume',
        component: 'resume',
    },
    {
        name: 'portfolio',
        url: '/portfolio',
        component: 'portfolio',
    },
];


},{}]},{},[1]);
