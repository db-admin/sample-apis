/**
 * Enrollment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   attributes: {
     'student': { model: 'student' },
     'grade': { 'type': 'integer' },
     'name': { 'type': 'string' },
     'classSession': { 'model': 'ClassSession' }
   }
 };
