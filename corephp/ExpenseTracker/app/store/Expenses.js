/*
 * File: app/store/Expenses.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ExpenseTracker.store.Expenses', {
    extend: 'Ext.data.Store',
    alias: 'store.expenses',

    requires: [
        'ExpenseTracker.model.Expense',
        'Ext.data.proxy.LocalStorage',
        'Ext.util.Grouper'
    ],

    config: {
        autoLoad: true,
        model: 'ExpenseTracker.model.Expense',
        storeId: 'Expenses',
        proxy: {
            type: 'localstorage',
            id: 'ExpenseLocalStorage'
        },
        grouper: {
            groupFn: function(item) {
                return '<div style="color:#fff;">'+Ext.Date.format(item.get('date'),'F d, Y')+'</div>';
            },
            direction: 'DESC',
            sortProperty: 'date'
        }
    }
});