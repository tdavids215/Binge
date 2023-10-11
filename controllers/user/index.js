const router = require('express').Router();
const loginRoute = require('./login');
const profileRoute = require('./profile');

router.use('/login', loginRoute);
router.use('/profile', profileRoute);

module.exports = router;
