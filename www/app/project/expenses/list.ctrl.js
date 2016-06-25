angular.module('starter.controllers')

.controller('ExpensesCtrl', function($scope, $log, $rootScope, FactoryAppData) {

    $log.debug('ExpensesCtrl..');

    $scope.expenses = FactoryAppData.load();
    $scope.title = 'dsfkjsqdhlkjfhdslkjfhdsqkjfh';



    // Remove a expense from project
    $scope.remove = function(key){

        $log.debug('remove '+key);

        delete $scope.test[key];

        $log.debug($scope.test);

        //TODO

    }
    
    $scope.create = function(){

        $log.debug('newProject..');

        var newProject = FactoryAppData.newProject($scope.title);
        $log.debug($scope);

        FactoryAppData.addProject(newProject);

        //TODO

    }

})