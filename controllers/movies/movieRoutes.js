const router = require('express').Router();


// /movies
router.get('/', (req, res) => {
	res.json({ message: 'This is movies page' });
});

module.exports = router;
