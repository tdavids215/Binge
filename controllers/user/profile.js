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

router.put('/', withAuth, async (req, res) => {
	try {
		const newName = req.body.newName;
		const userData = await User.update(
			{ name: newName },
			{
				where: {
					email: req.session.userEmail,
				},
			}
		);
		res.status(200).json(userData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
