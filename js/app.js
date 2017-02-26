const app = angular.module('PortfolioApp', ['ui.router']);

/* Controllers */
const controllers = [
	require('./controllers/resume'),
	require('./controllers/about'),
];

for (let i = 0; i < controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].func);
}

/* Routes */
const routes = require('./routes');

app.config($stateProvider => {
	for (let i = 0; i < routes.length; i++) {
		$stateProvider.state(routes[i]);
	}
});