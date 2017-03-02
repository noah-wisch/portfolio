module.exports = {
	name: 'ResumeController',
	func($scope, $location) {
		$scope.isActive = (viewLocation) => {
			return viewLocation === $location.path();
		};
	},
};