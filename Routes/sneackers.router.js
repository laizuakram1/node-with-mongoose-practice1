const express = require('express')
const router = express.Router();

const sneackersController = require('./../contorollers/sneackers.controller');


router.route('/')
.get(sneackersController.getSneackers)
.post(sneackersController.saveSneackers)


// update single sneacker
router.route('/:id')
.patch(sneackersController.updateSneacker)


module.exports = router;