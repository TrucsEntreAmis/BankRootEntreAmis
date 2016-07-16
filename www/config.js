angular.module('bankroot')

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'views/menu.html',
            controller: 'AppCtrl'
        })
        .state('app.projectnew', {
            url: '/project/new',
            views: {
                'menuContent': {
                    templateUrl: 'views/project.html',
                    controller: 'ProjectCtrl'
                }
            }
        })
        .state('app.projectedit', {
            url: '/project/:projectId/edit',
            views: {
                'menuContent': {
                    templateUrl: 'views/project.html',
                    controller: 'ProjectCtrl'
                }
            }
        })
        .state('app.projectNewExpense', {
            url: '/project/:projectId/newExpense',
            views: {
                'menuContent': {
                    templateUrl: 'views/expense.html',
                    controller: 'ExpenseCtrl'
                }
            }
        })
        .state('app.projectExpense', {
            url: '/project/:projectId/expense/:expenseId',
            views: {
                'menuContent': {
                    templateUrl: 'views/expense.html',
                    controller: 'ExpenseCtrl'
                }
            }
        })
        .state('app.projectexpenses', {
            url: '/project/:projectId/expenses',
            views: {
                'menuContent': {
                    templateUrl: 'views/expenses.html',
                    controller: 'ExpensesCtrl'
                }
            }
        })
        .state('app.start', {
            url: '/start',
            views: {
                'menuContent': {
                    templateUrl: 'views/start.html'
                }
            }
        })
        .state('app.parameters', {
            url: '/parameters',
            views: {
                'menuContent': {
                    templateUrl: 'views/parameters.html',
                    controller: 'ParametersCtrl'
                }
            }
        })

    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/start');
});