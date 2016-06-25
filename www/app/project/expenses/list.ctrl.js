angular.module('starter.controllers')

.controller('ExpensesCtrl', function($scope, $log, $rootScope) {

    $log.debug('ExpensesCtrl..');

    $scope.expenses =
        [
            {
                id: 0,
                name: 'depense 1'
            },
            {
                id: 1,
                name: 'depense 2'
            },
            {
                id: 2,
                name: 'depense 3'
            },
            {
                id: 3,
                name: 'depense 4'
            }
        ];


    $scope.test = {
        1: 'toto',
        5: 'marcel',
        8: 'fanch'
    };





    // Remove a expense from project
    $scope.remove = function(key){

        $log.debug('remove '+key);

        delete $scope.test[key];

        $log.debug($scope.test);

        //TODO

    }

})