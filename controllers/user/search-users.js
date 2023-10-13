const router = require('express').Router();
const withAuth = require('../../utils/auth');
const User = require('../../models/User');

// /search

router.get('/', withAuth, async (req, res) => {
	res.render('search');
});

router.get('/:id', withAuth, async (req, res) => {
	try {
		const searchId = req.params.id;
		const resultData = await User.findOne({ where: { id: searchId } });
		if (!resultData) return res.status(404).json({ message: 'No user found' });
		const result = resultData.get({ plain: true });
		res.status(200).render('search', { user: result });
	} catch (error) {
		if (error) {
			console.log(error);
			res.status(500).json(error);
		}
	}
});

router.post('/', withAuth, async (req, res) => {
	try {
		const searchEmail = req.body.email;
		if (searchEmail === req.session.userEmail) return res.status(400).json({ message: 'You cannot search for yourself' });

		const result = await User.findOne({
			where: {
				email: searchEmail,
			},
		});
		const user = result.get({ plain: true });
		return res.status(200).json({ userId: user.id });
	} catch (error) {
		if (error) {
			console.log(error);
			res.status(500).json(error);
		}
	}
});

module.exports = router;
