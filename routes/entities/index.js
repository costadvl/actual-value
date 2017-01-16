const app = require('express');
const router = app.Router();

const entitie = require('./entitie');
//const entities = require('./entities');
const createEntitie = require('./createEntitie');

router.get('/entitie:entitieId', entitie);
//router.get('/entities', entities);
router.post('/createEntitie',createEntitie);

module.exports = router;
