const router = require('express').Router();
const { User } = require('../../models');

// /login
router.get('/', (req, res) => {
	res.render('login');
});

router.post('/', async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email } });
		if (!user) {
			res.status(400).json({ message: 'No user with that email address!' });
			return;
		}
		if (!user.checkPassword(password)) {
			res.status(400).json({ message: 'Incorrect password!' });
			return;
		}
		req.session.save(() => {
			req.session.loggedIn = true;
			req.session.userEmail = email;
			res.status(200).redirect('/profile');
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
