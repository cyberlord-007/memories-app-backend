const express = require('express');
const router = express.Router();

//@route Post api/users
// @desc Register users
// @access Public

router.get('/', (req, res) => res.send('users route'));

module.exports = router;
