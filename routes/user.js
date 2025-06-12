const express = require('express');
const router = express.Router();

const createUser = require('../controllers/createUser');
const getUser = require('../controllers/getUser');
const updateUser = require('../controllers/updateUser');
const patchUser = require('../controllers/patchUser');
const deleteUser = require('../controllers/deleteUser');

router.route('/user')
  .get( getUser)
  .post(createUser)

router.route('/user/:id')
  .put(updateUser)
  .patch(patchUser)
  .delete(deleteUser);

module.exports = router;
