const router = require('express').Router();
const bookRoutes = require('./bookRoutes.js');

router.use(bookRoutes);

module.exports = router;
