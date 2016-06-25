/**
 * Created by Greg on 25/06/2016.
 */


angular.module('starter')
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
    .factory('Projects', function( $rootScope) {
        return {
            load: function() {
                var projectString = window.localStorage['appData'];
                if(projectString) {
                    $rootScope.appData = angular.fromJson(projectString);
                }
                else
                {
                    $rootScope.appData.projectIndex = 0;
                    $rootScope.appData.projects = [];
                }
                return $rootScope.appData.projects;
            },
            save: function() {
                window.localStorage['appData'] = angular.toJson($rootScope.appData);
            },
            getLastActiveIndex: function() {
                return parseInt(window.localStorage['lastActiveProject']) || 0;
            },
            setLastActiveIndex: function(index) {
                window.localStorage['lastActiveProject'] = index;
            },
            newProject: function(projectTitle) {
                // Add a new project
                return {
                    title: projectTitle,
                    date : time(),
                    participantIndex: 0,
                    participants: [],
                    expensesIndex: 0,
                    expenses: []
                };
            },
            addProject:function(project)
            {
                $rootScope.appData.projects[$rootScope.appData.projectIndex] = project;
                $rootScope.projectIndex += 1;
                save();
            },
            deleteProject:function (id) {
                delete $rootScope.appData.projects[id];
                save();
            },
            createParticipant: function() {
                // Add a new project
                return {
                    name: "no name",
                    defaultShare : 1
                };
            },
            AddParticipantToProject: function (projectId, participant) {
                id = $rootScope.appData.projects[projectId].participantIndex;
                $rootScope.appData.projects[projectId].participants[id] = participant;
                $rootScope.appData.projects[projectId].participantIndex = id+1;
                save();
            }
        }
    });