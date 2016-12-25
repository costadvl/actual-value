const models = require('express').Router();
const users = require('./users');
const user = require('./user');

models.get('/users', users);
models.get('/user:userId', user)
module.exports = models;
