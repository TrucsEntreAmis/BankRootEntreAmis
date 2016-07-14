angular.module('bankroot')

    .controller('ExpensesCtrl', function($scope, $log, $rootScope, Storage, Project, Member, Expense) {

        $log.debug('ExpensesCtrl..');

        $scope.project = new Project({name: 'Nouveau project'});
        
        // Remove a expense from project
        $scope.delete = function(expenseId){

            $log.debug('deleteExpense '+expenseId);
            $scope.project.removeExpenseId(expenseId);

        }

        $scope.create = function(){

            $log.debug('create..');
            $log.debug($scope.project.title);
            Storage.addProject($scope.project);
            
        }

    });