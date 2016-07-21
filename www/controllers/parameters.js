angular.module('bankroot')

.controller('ParametersCtrl', function($scope, $log, Storage) {

    $log.debug('ParametersCtrl..');

    $scope.formatLocalStorage = function() {

        //Warning ! clean local storage
        $log.debug('formatLocalStorage..');
        Storage.format();
        Storage.load(true);

    };

});