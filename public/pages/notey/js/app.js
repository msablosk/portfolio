var app = angular.module('notey', ['ui.router'])

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider.state(
			'home',	{
					url: '/home',
					templateUrl: 'templates/home.html',
					controller: 'MainCtrl'
					});

		$stateProvider.state(
			'new',	{
					url: '/new',
					templateUrl: 'templates/new.html',
					controller: 'MainCtrl'
					});

		$stateProvider.state(
			'edit',	{
					url: '/edit/{id}',
					templateUrl: 'templates/edit.html',
					controller: 'MainCtrl'
					});

		$urlRouterProvider.otherwise('/home');
	}]);

