const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({ message: 'This is movies page' });
});

module.exports = router;