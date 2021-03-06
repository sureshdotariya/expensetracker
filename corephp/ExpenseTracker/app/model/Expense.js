/*
 * File: app/model/Expense.js
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

Ext.define('ExpenseTracker.model.Expense', {
    extend: 'Ext.data.Model',
    alias: 'model.expense',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        identifier: {
            type: 'sequential'
        },
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'notes',
                type: 'string'
            },
            {
                name: 'categoryid',
                type: 'int'
            },
            {
                name: 'price',
                type: 'float'
            },
            {
                dateFormat: 'Y-m-d',
                defaultValue: 'new Date()',
                name: 'date',
                type: 'date'
            }
        ],
        validations: [
            {
                type: 'presence',
                field: 'name'
            },
            {
                type: 'presence',
                field: 'categoryid'
            },
            {
                type: 'presence',
                field: 'price'
            },
            {
                type: 'presence',
                field: 'date'
            }
        ]
    }
});