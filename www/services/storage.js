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

        this.nextProjectId = 0;

        //Load datas from localstorage
        this.format = function() {
            $log.debug('Format data storage');
            window.localStorage['projects'] = angular.toJson({});
        }
        //Load datas from localstorage
        this.load = function(force) {

            //Load only if not allready done or forced
            if($rootScope.projects===undefined || force) {

                $log.debug("Load data from storage...");
                $rootScope.projects = {};
                

                //Foreach project found, instanciate object
                if (window.localStorage['projects'] !== undefined) {
                    var projects = angular.fromJson(window.localStorage['projects']);
                    var that = this;
                    $log.debug('Load ' + projects.length + ' projects');
                    $log.debug(projects);
                    angular.forEach(projects, function(project){
                        $rootScope.projects[that.nextProjectId] = new Project(project);
                        that.nextProjectId += 1;
                    });
                }

            }
            return $rootScope.projects;
        };

        //save datas
        this.save = function() {
            window.localStorage['projects'] = angular.toJson($rootScope.projects);
        };

        //Add a project
        this.addProject = function(project) {
            this.load();
            var projectId = this.nextProjectId
            $rootScope.projects[projectId] = project;
            this.nextProjectId += 1;
            return projectId;
        };

        //Get all projects
        this.getProjects = function(){
            this.load();
            return $rootScope.projects;
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