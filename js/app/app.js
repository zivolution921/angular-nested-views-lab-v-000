angular
    .module('app', [''])
    .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'SettingController'
        })
        .state('home.notifications', {
          url: 'notifications',
          templateUrl: 'views/home/notifications.html',
          controller: 'UserSettingsController'
        })
        .state('home.timeline', {
          url: 'timeline',
          templateUrl: 'views/home/timeline.html',
          controller: 'NotificationsSettingsController'
        })
        .state('home.user' {
          url: 'user',
          templateUrl: 'views/home/user.html',
          controller: 'NotificationsSettingsController'
        })
    });