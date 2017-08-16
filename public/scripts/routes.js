angular.module('edmodo')

  
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/landing');

    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: '/views/templates/landing.html',
        controller: 'mainCtrl',
      })
      .state('landing.description', {
        url: '/description',
        templateUrl: '/views/templates/description.html',
        controller: 'mainCtrl'
      })
      .state('landing.submissions', {
        url: '/submissions',
        templateUrl: '/views/templates/submissions.html',
        controller: 'mainCtrl'
      })
      .state('landing.submissions.content', {
        url: '/content',
        templateUrl: '/views/templates/submissions.content.html',
        controller: 'mainCtrl'
      })

  })