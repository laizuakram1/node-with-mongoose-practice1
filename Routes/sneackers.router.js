const express = require('express')
const router = express.Router();

const sneackersController = require('./../contorollers/sneackers.controller');


router.route('/')
.get(sneackersController.getSneackers)
.post(sneackersController.saveSneackers)

module.exports = router;