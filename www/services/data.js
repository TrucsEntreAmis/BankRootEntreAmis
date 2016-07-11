/**
 * Created by Greg on 25/06/2016.
 */


angular.module('bankroot')
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
    .factory('FactoryAppData', function( $rootScope, FactoryProject) {
        return {
            load: function() {
                var projectString = window.localStorage['appData'];
                if(projectString) {
                    //$rootScope.appData = angular.fromJson(projectString);

                    data = angular.fromJson(projectString);
                    $rootScope.appData = {};
                    $rootScope.appData.projectIndex = data.projectIndex;
                    $rootScope.appData.projects = {};
                    
                    angular.forEach(data.projects, function(value, key) {
                        $rootScope.appData.projects[key] = FactoryProject.createProjectFromData(value) ;
                    });
                    
                }
                else
                {
                    $rootScope.appData = {};
                    $rootScope.appData.projectIndex = 0;
                    $rootScope.appData.projects = {};
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
            getProjects: function() {
                return $rootScope.appData.projects;
            },
            getProject: function(id) {
                return $rootScope.appData.projects[id];
            },
            addProject:function(project)
            {
                var projectId = $rootScope.appData.projectIndex;
                $rootScope.appData.projects[projectId] = project;
                $rootScope.appData.projectIndex += 1;
                this.save();
                return projectId;
            },
            deleteProject:function (id) {
                delete $rootScope.appData.projects[id];
                this.save();
            }
        }
    });