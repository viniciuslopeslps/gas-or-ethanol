angular.module('myApp', ['ionic', 'myApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('question', {
      url: '/question',
      templateUrl: 'templates/question.html',
      controller: 'questionCtrl' 
  })

    $urlRouterProvider.otherwise('/question');
});
