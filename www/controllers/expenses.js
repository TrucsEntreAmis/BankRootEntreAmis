angular.module('bankroot')

    .controller('ExpensesCtrl', function($scope, $log, $rootScope, FactoryAppData) {

        $log.debug('ExpensesCtrl..');

        $scope.expenses = FactoryAppData.load();
        $scope.project = FactoryAppData.newProject('Nouveau project');
        
        // Remove a expense from project
        $scope.delete = function(key){

            $log.debug('remove '+key);
            FactoryAppData.deleteProject(key);
            $log.debug($scope.test);

        }

        $scope.create = function(){

            $log.debug('create..');
            $log.debug($scope.project.title);
            FactoryAppData.addProject($scope.project);
            
        }

    });