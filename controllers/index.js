const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const bookRoutes = require('./books');
const movieRoutes = require('./movies');
const songRoutes = require('./songs');
const userRoutes = require('./user');

router.use('/', homeRoutes);
router.use('/books', bookRoutes);
router.use('/movies', movieRoutes);
router.use('/songs', songRoutes);
router.use(userRoutes);

module.exports = router;
