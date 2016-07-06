/**
 * Created by Greg on 06/07/2016.
 */

angular.module('bankroot')
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
    .factory('FactoryParticant', function() {
        return {

            createParticipant: function(participantName) {
                // Add a new project
                return {
                    name: participantName,
                    defaultShare :1

                };
            }

        }
    });