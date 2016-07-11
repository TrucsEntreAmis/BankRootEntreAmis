/**
 * Created by Greg on 06/07/2016.
 */

angular.module('bankroot')
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
    .factory('FactoryExpense', function() {
        return {

            createExpense:  function() {
                // Add a new project
                return {
                    title: "No Name",
                    date : Date.now(),
                    value : 0,
                    payeurs: [],
                    beneficiaires: [],

                    addPayeur: function ( participantId, priceValue) {
                        this.payeurs[participantId] = priceValue;
                    },
                    deletePayeur:function (id) {
                        delete this.payeurs[id];
                    },
                    addBeneficiaire: function ( participantId, sharePart) {

                        this.beneficiaires[id] = expense;

                    },
                    deleteBeneficiaire:function (id) {
                        delete this.beneficiaires[id];
                    }
                };
            },
            createExpenseFromData:  function(data) {
                // Add a new project
                newExpense = createExpense();
                newExpense.title = data.title;
                newExpense.date = data.date;
                newExpense.payeurs = data.payeurs;
                newExpense.beneficiaires = data.beneficiaires;

                return newExpense;

            }


        }
    });