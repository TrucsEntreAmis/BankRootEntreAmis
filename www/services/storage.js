/**
 * Created by Fanch on 14/07/2016.
 */


angular.module('bankroot')
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
    .service('Storage', function($rootScope, $log, Project) {

        $rootScope.nextProjectId = 0;

        //Load datas from localstorage
        this.format = function() {
            $log.debug('Format data storage');
            window.localStorage['projects'] = angular.toJson({});
            window.localStorage['nextProjectId'] = 0;
        };
        //Load datas from localstorage
        this.load = function(force) {

            //Load only if not allready done or forced
            if($rootScope.projects===undefined || force) {

                $log.debug("Load data from storage...");
                $rootScope.projects = {};
                $rootScope.nextProjectId = parseInt(window.localStorage['nextProjectId']) || 0;

                //Foreach project found, instanciate object
                if (window.localStorage['projects'] !== undefined) {
                    var projects = angular.fromJson(window.localStorage['projects']);
                    $log.debug('Load ' + Object.keys(projects).length + ' projects');
                    angular.forEach(projects, function(project){
                        $rootScope.projects[$rootScope.nextProjectId] = new Project(project);
                        $rootScope.nextProjectId += 1;
                    });
                }

            }
            return $rootScope.projects;
        };

        //save datas
        this.save = function() {
            $log.debug("Save data to storage...");
            window.localStorage['projects'] = angular.toJson($rootScope.projects);
            window.localStorage['nextProjectId'] = angular.toJson($rootScope.nextProjectId);
        };

        //Add a project
        this.addProject = function(project) {
            this.load();
            var projectId = $rootScope.nextProjectId;
            $rootScope.projects[projectId] = project;
            $rootScope.nextProjectId += 1;
            return projectId;
        };

        //Get all projects
        this.getProjects = function(){
            this.load();
            return $rootScope.projects;
        };

        this.getProjectCount = function(){
            return Object.keys($rootScope.projects).length;
        };

        //Get a project from id
        this.getProject = function(projectId){
            this.load();
            if($rootScope.projects[projectId] instanceof Project) {
                return $rootScope.projects[projectId];
            }else{
                return undefined;
            }
        };

        this.getLastProjectId = function(){
            return Object.keys($rootScope.projects)[Object.keys($rootScope.projects).length-1];
        };

        //Remove a project from id
        this.removeProject= function(project){
            this.load();
            $rootScope.projects.splice($rootScope.projects.indexOf(project));
        };

        //Remove a project
        this.removeProjectId= function(projectId){
            this.load();
            delete $rootScope.projects[projectId];
        };



    });