 var app = angular.module('taskdo',[]);
app.controller('taskctrl', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8083/ToDoList';

	$scope.getAllTasks= function() {
		console.log("get all tasks")
		$http({
			method : 'GET',
			url : BASE_URL+'/getAllTasks'
		}).success(function(data, status, headers, config) {
			$scope.tasks=data;
			//alert(data); 
		});
	};
	$scope.submit = function() {
		console.log("createTask")
		
		$scope.task = {	
			id:$scope.id,
			title : $scope.title,
			description : $scope.description,
			lastdate:$scope.lastdate,
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/createTask',
			data : $scope.task
		}).success(function(data, status, headers, config) {
			$scope.id='';
			$scope.title='';
			$scope.description='';
			$scope.lastdate='';
		}).error(function(data,status,headers,config){
			alert("error");
		});
	};
	$scope.deletetask=function(id){
		$http({
			method:'DELETE',
		url:BASE_URL+'/deleteTask/'+id
		}).success(function(data,status,headers,config){
			$scope.getAllTasks();
		})
	};
	$scope.edittask=function(id,title,description){
		$scope.id=id;
		$scope.title=title;
		$scope.description=description;
		
	};
	        }]);