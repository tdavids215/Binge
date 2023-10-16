const router = require('express').Router();
const withAuth = require('../utils/auth');

// home page
router.get('/', withAuth, (req, res) => {
	res.render('home', {
		loggedIn: req.session.loggedIn,
	});
});

module.exports = router;
