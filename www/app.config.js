angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'views/menu.html',
            controller: 'AppCtrl'
        })
        .state('app.expenses', {
            url: '/expenses',
            views: {
                'menuContent': {
                    templateUrl: 'views/expenses.html',
                    controller: 'ExpensesCtrl'
                }
            }
        })

    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/expenses');
});