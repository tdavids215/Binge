const router = require('express').Router();
const withAuth = require('../../utils/auth');

// /search

router.get('/', withAuth, async (req, res) => {
	res.render('search', { loggedIn: req.session.loggedIn });
});

router.post('/', withAuth, async (req, res) => {
	const searchEmail = req.body.email;
	if (searchEmail === req.session.userEmail) res.status(400).json({ message: 'You cannot search for yourself' });

	try {
		const result = await User.findAll({
			where: {
				email: searchEmail,
			},
		});
		const user = result.get({ plain: true });
		res.status(200).json(user);
	} catch (error) {
		if (error) {
			console.log(error);
			res.status(500).json(error);
		}
	}
});

module.exports = router;
