const router = require('express').Router();
const withAuth = require('../../utils/auth');

// /books
router.get('/', withAuth, (req, res) => {
	res.json({ message: 'This is books page' });
});

module.exports = router;
