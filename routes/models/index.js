const app = require('express');
const router = app.Router();
const users = require('./users');
const user = require('./user');
const createUser = require('./createUser');
//router.get('/user:userId', user)
//models.get('/user', user)
router.post('/createUser',createUser)
module.exports = router;
