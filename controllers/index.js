const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const bookRoutes = require('./book/bookRoutes.js');

router.use('/', homeRoutes);
router.use('/books', bookRoutes);

module.exports = router;
