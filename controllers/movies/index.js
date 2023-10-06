const router = require('express').Router();
const movieRoutes = require('./movieRoutes.js');

router.use(movieRoutes);

module.exports = router;
