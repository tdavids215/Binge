const router = require('express').Router();
const loginRoute = require('./login');

router.use(loginRoute);

module.exports = router;
