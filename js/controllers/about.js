module.exports = {
	name: 'AboutController',
	func($scope, $location) {
		$scope.isActive = (viewLocation) => {
			return viewLocation === $location.path();
		};
	},
};