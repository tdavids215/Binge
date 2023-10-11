const router = require('express').Router();

// /songs
router.get('/', (req, res) => {
	res.json({ message: 'This is songs page' });
});

module.exports = router;
