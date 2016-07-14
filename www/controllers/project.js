angular.module('bankroot')

    .controller('ProjectCtrl', function ($scope, $log, $stateParams, $state, $location, $ionicHistory, Storage, Project, Member, Expense) {

        $log.debug('ProjectCtrl..');

        if ($stateParams.projectId !== undefined) {
            loadFromProject($stateParams.projectId)
        } else {
            loadFromNewProject();
        }

        //Display page with data project
        function loadFromNewProject(){
            //Instanciate a new project
            $scope.project = new Project();
            delete $scope.projectId;
            $scope.pageTitle = 'Nouveau projet';
        }

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
                $scope.pageTitle = 'Modifier le projet ' + $scope.project.name;
            }
        }


        // Remove a project
        $scope.deleteProject = function () {

            $log.debug('deleteProject..');

            Storage.removeProjectId($scope.projectId);
            Storage.save();

            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.projectnew');

        };

        // Create a project
        $scope.createProject = function () {

            $log.debug('createProject..');

            //Send project to storage
            var projectId = Storage.addProject($scope.project);
            Storage.save();

            //Empty this scope for next display
            loadFromNewProject();

            $ionicHistory.nextViewOptions({
                disableBack: true
            });

            //$state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: false });
            $state.go('app.projectedit', {projectId: projectId}, {reload: true});

        };

        // Update a project
        $scope.updateProject = function () {

            $log.debug('updateProject..');

            //Send project to storage
            Storage.save();

            $ionicHistory.nextViewOptions({
                disableBack: true
            });

        };

        // Add Participant to theproject
        $scope.addMember = function () {

            $log.debug('addMember..');

            $scope.project.addMember(new Member( {name: 'Nom ?', defaultShare: 1} ) );

            $scope.memberName = '';
            $scope.memberShare = 1;

            Storage.save();

        };

        // Add Participant to theproject
        $scope.deleteMember = function (MemberId) {

            $log.debug('deleteMember..');

            $scope.project.removeMemberId(participantId);

            Storage.save();

        };

    });