/**
 * Created by Greg on 06/07/2016.
 */


angular.module('bankroot')
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
    .factory('Member', function() {

        var Member = function(member){

            this.name = '';
            this.defaultShare = 1;

            if(member !== undefined){
                angular.merge(this, member);
            }


        }

        return Member;

    });