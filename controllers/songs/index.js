const router = require('express').Router();
const songRoutes = require('./songRoutes.js');

router.use(songRoutes);

module.exports = router;
