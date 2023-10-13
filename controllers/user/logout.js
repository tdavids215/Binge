const router = require('express').Router();
const withAuth = require('../../utils/auth');

// /logout
router.post('/', withAuth, async (req, res) => {
	try {
		req.session.destroy();
		res.status(200).redirect('/login');
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
});

module.exports = router;
