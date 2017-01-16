const app = require('express');
const router = app.Router();

const users = require('./users');
const user = require('./user');
const createUser = require('./createUser');

router.get('/users', users);
router.get('/user/:userId', user);
router.post('/createUser',createUser);

module.exports = router;
