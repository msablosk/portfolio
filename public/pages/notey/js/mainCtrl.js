angular.module('notey').controller('MainCtrl', ['$scope', 'notes', '$location', '$stateParams', function ($scope, notes, $location, $stateParams) {
	$scope.notes = notes.notes;
	$scope.addNote = function () {
		if(!$scope.subject || $scope.subject === '') { return; }
		if(!$scope.body || $scope.body === '') { return; }
		$scope.notes.push(
			{subject: $scope.subject, body: $scope.body}
			)
		$location.path('/home')
		}

	$scope.editNote = function () {
		if(!$scope.note.subject || $scope.note.subject === '') { return; }
		if(!$scope.note.body || $scope.note.body === '') { return; }
		$scope.note = {subject: $scope.note.body, body: $scope.note.body};
		$location.path('/home')
		}
	
	$scope.deleteNote = function ($index) {
		$scope.notes.splice($index, 1)
	}

	$scope.note = notes.notes[$stateParams.id]

}])