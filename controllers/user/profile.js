const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// /profile
router.get('/', withAuth, async (req, res) => {
	const user = await User.findAll();
	res.render('profile', { user, loggedIn: req.session.loggedIn });
});

module.exports = router;
