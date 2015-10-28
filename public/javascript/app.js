(function() {
	'use strict';
	angular.module('app', ['ui.router','ngMaterial'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider, $mdThemingProvider, $httpProvider) {
		$mdThemingProvider.theme('default')
		.primaryPalette('amber', {
			'default': '400', // by default use shade 400 from the pink palette for primary intentions
			'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
			'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
			'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
		})
		// If you specify less than all of the keys, it will inherit from the
		// default shades
		.accentPalette('teal', {
			'default': '200' // use shade 200 for default, and keep all other shades the same
		});

		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('CreateReview',{
			url:'/createreview',
			templateUrl:'views/CreateReview.html'
		}).state('EditReview',{
			url:'/editreview/:id',
			templateUrl:'views/EditReview.html'
		}).state('Login_Register',{
			url:'/login_register',
			templateUrl:'views/Login_Register.html'
		}).state('DetailReview',{
			url: '/detailreview/:id',
			templateUrl: 'views/detailreview.html'
		});

		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthInterceptor');

	//	$urlRouterProvider.otherwise('/');
	}
})();
