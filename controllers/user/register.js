const router = require('express').Router();
const { User } = require('../../models');
// /register
router.get('/', async (req, res) => {
	res.render('registration');
});

router.post('/', async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		res.status(400).json({ message: 'Please provide a name, email, and password' });
		return;
	}
	if (password.length < 8) {
		res.status(400).json({ message: 'Password must be at least 8 characters long' });
		return;
	}
	if (!email.includes('@')) {
		res.status(400).json({ message: 'Please provide a valid email address' });
		return;
	}
	try {
		const userData = await User.create({
			name,
			email,
			password,
		});
		req.session.save(() => {
			req.session.loggedIn = true;
			req.session.userEmail = userData.email;
			res.status(200).redirect('/profile');
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
