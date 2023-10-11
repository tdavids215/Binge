const router = require('express').Router();
const withAuth = require('../../utils/auth');

// /movies
router.get('/', withAuth, (req, res) => {
	res.json({ message: 'This is movies page' });
});

module.exports = router;
