angular.module('bankroot')

    .controller('ExpensesCtrl', function($scope, $log, $stateParams, $state, $ionicHistory, $rootScope, Storage, Project, Member, Expense) {

        $log.debug('ExpensesCtrl..');
        loadFromProject($stateParams.projectId);

        
        //Display page for new project creation
        function loadFromProject(projectId){
            //Get project object
            $scope.project = Storage.getProject(projectId);
            if($scope.project === undefined){
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $state.go('app.projectnew');
            }else {
                $scope.projectId = projectId;
                $scope.pageTitle = 'Dépenses du projet ' + $scope.project.name;
            }
        }




        // Remove a expense from project
        $scope.deleteExpense = function(expenseId){

            $log.debug('deleteExpense '+expenseId);
            $scope.project.removeExpenseId(expenseId);

        }

        $scope.createExpense = function(){

            $log.debug('createExpense..');
            $log.debug($scope.project.title);

            $state.go('app.projectNewExpense', {projectId: $scope.projectId}, {reload: true});
            
        }

    });