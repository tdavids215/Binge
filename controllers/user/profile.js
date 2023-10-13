const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// /profile
router.get('/', withAuth, async (req, res) => {
	const userData = await User.findOne({
		where: {
			email: req.session.userEmail,
		},
	});
	const user = userData.get({ plain: true });
	res.render('profile', { user, loggedIn: req.session.loggedIn });
});

module.exports = router;
