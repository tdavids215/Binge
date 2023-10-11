const router = require('express').Router();

// /profile
router.get('/', (req, res) => {
	res.json({ message: 'This is profile page' });
});

module.exports = router;
