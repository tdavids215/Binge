const router = require('express').Router();

// /login
router.get('/login', (req, res) => {
	res.json({ message: 'This is login page' });
});

module.exports = router;
