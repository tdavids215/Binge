const router = require('express').Router();

// /books
router.get('/', (req, res) => {
	res.json({ message: 'This is books page' });
});

module.exports = router;
