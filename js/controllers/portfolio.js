module.exports = {
	name: 'PortfolioController',
	func($scope, $location) {
		$scope.isActive = (viewLocation) => {
			return viewLocation === $location.path();
		};
	},
};