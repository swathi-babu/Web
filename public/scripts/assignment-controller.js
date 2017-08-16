angular.module('edmodo.modalInstance', [])
.controller('assignmentCtrl', function ($scope, $modalInstance, assignmentFactory) {
    
    //create assignment
    $scope.create = function (assignment) {
    	$scope.submitForm();
      assignmentFactory.addAssignment(assignment);
      $modalInstance.close();
    };
    
     $scope.submitForm = function() {
	// to check if form is valid
	if ($scope.userForm.$valid) {
        alert('New Assignment Created');
        }
    };

    //close modal
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
 });