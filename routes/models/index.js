const app = require('express');
const router = app.Router();

const users = require('./users');
const user = require('./user');
const createUser = require('./createUser');
const entitie = require('./entitie');
//const entities = require('./entities');

router.get('/users', users);
router.get('/user:userId', user);
router.post('/createUser',createUser);

router.get('/entitie:entitieId', entitie);
//router.get('/entities', entities);

module.exports = router;
