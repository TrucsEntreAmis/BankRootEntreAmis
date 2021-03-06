/**
 * Created by Greg on 06/07/2016.
 */


angular.module('bankroot')
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
    .factory('Expense', function() {

        var Expense = function(expense){

            this.title = '';
            this.date = ''; //Date.now(); //TODO fix date picker and this storage format in JS
            this.debtors = {};
            this.recipients = {};

            if(expense !== undefined){
                angular.merge(this, expense);
            }

        };

        Expense.prototype.addDebtor = function(debtorId, amount){
            this.debtors[debtorId] = amount;
        };

        Expense.prototype.removeDebtor = function(debtorId){
            delete this.debtors[debtorId];
        };

        Expense.prototype.addRecipient = function(recipientsId, recipientsShare){
            this.recipients[recipientsId] = recipientsShare;
        };

        Expense.prototype.removeRecipient = function(recipientsId){
            delete this.recipients[recipientsId];
        };

        Expense.prototype.totalAmount = function(){
            var amountValue = 0;
            angular.forEach(this.debtors,function( amount, debtorId){
                amountValue += amount;
            });
            return amountValue;
        };

        return Expense;

    });
