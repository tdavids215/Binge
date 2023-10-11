const router = require('express').Router();
const loginRoute = require('./login');
const profileRoute = require('./profile');
const registerRoute = require('./register');
const logoutRoute = require('./logout');

router.use('/login', loginRoute);
router.use('/profile', profileRoute);
router.use('/register', registerRoute);
router.use('/logout', logoutRoute);

module.exports = router;
