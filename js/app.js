const app = angular.module('PortfolioApp', ['ui.router']);

/* Controllers */
const controllers = [
	require('./controllers/resume'),
	require('./controllers/about'),
	require('./controllers/portfolio'),
];

for (let i = 0; i < controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].func);
}

/* Components */
const components = [
	require('./components/about'),
	require('./components/portfolio'),
	require('./components/resume'),
];

for (let i = 0; i < components.length; i++) {
	app.component(components[i].name, components[i].func);
}

/* Routes */
const routes = require('./routes');

app.config($stateProvider => {
	for (let i = 0; i < routes.length; i++) {
		$stateProvider.state(routes[i]);
	}
});

