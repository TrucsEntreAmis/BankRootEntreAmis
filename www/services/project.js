/**
 * Created by Greg on 06/07/2016.
 */

    angular.module('bankroot')
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
    .factory('Project', function($log, Member, Expense) {

        var Project = function (project) {

            this.projectId = undefined;
            this.members = [];
            this.expenses = [];

            if(project !== undefined){
                angular.extend(this, project);

                //Extend members objects if exists
                if(project.members !== undefined){
                    this.members = [];
                    members = this.members;
                    angular.forEach(project.members, function(member){
                        members.push(new Member(member));
                    });
                }

                //Extend expenses objects if exists
                if(project.expenses !== undefined){
                    this.expenses = [];
                    expenses = this.expenses;
                    angular.forEach(project.expenses, function(expense){
                        expenses.push(new Expense(expense));
                    });
                }

            }

        };

        Project.prototype.createFromDatas = function (member) {
            this.members.push(member);
        };

        Project.prototype.addMember = function (member) {
            this.members.push(member);
        };

        Project.prototype.removeMember = function (member) {
            this.members.splice( this.members.indexOf(member) );
        };

        Project.prototype.removeMemberId = function (memberId) {
            delete this.members[memberId];
        };

        Project.prototype.addExpense = function (expense) {
            this.members.push(member);
        };

        Project.prototype.removeExpense = function (expense) {
            this.expenses.splice( this.expenses.indexOf(expense) );
        };

        Project.prototype.removeExpenseId = function (expenseId) {
            delete this.expenses[expenseId];
        };

        return Project;

    });