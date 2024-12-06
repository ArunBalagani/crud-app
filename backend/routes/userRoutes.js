const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');

// POST route to create a new user
router.post('/users', createUser);

// GET route to fetch all users
router.get('/users', getUsers);

module.exports = router;
