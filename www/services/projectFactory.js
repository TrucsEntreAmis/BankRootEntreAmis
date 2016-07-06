/**
 * Created by Greg on 29/06/2016.
 */

angular.module('bankroot')
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
    .factory('FactoryProject', function() {
        return {

            createProject: function(projectTitle) {
                // Add a new project
                return {
                    title: projectTitle,
                    date : Date.now(),
                    participantIndex: 0,
                    participants: [],
                    expensesIndex: 0,
                    expenses: [],
                    bou: 123,
                    addParticipant: function ( participant) {
                        id = this.participantIndex;
                        this.participants[id] = participant;
                        this.participantIndex = id+1;
                    },
                    deleteParticipant:function (id) {
                        delete this.participants[id];
                    },
                    addExpense: function ( expense) {
                        id = this.expensesIndex;
                        this.expenses[id] = expense;
                        this.expensesIndex = id+1;
                    },
                    deleteExpense:function (id) {
                        delete this.expenses[id];
                    }


                };
            }

        }
    });