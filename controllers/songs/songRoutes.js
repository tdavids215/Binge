const router = require('express').Router();
const withAuth = require('../../utils/auth');

// /songs
router.get('/', withAuth, (req, res) => {
	res.json({ message: 'This is songs page' });
});

module.exports = router;
