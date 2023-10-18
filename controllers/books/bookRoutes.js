const router = require('express').Router();
const withAuth = require('../../utils/auth');
const User = require('../../models/User');
const Book = require('../../models/book');

// /books
router.get('/', withAuth, async (req, res) => {
	const userData = await User.findOne({ where: { email: req.session.userEmail } });
	const user = userData.get({ plain: true });
	const userBooksData = await Book.findAll({ where: { user_id: user.id } });
	const userBooks = userBooksData.map((book) => book.get({ plain: true }));
	const readBooks = userBooks.filter((book) => book.is_read === true);
	const unreadBooks = userBooks.filter((book) => book.is_read === false);
	res.render('books', { books: userBooks, readBooks, unreadBooks, loggedIn: req.session.loggedIn });
});

router.post('/', withAuth, async (req, res) => {
	try {
		const userResult = await User.findOne({ where: { email: req.session.userEmail } });
		const user = userResult.get({ plain: true });
		const { bookName, bookDescription, isRead } = req.body;
		const book = await Book.create({
			name: bookName,
			description: bookDescription,
			is_read: isRead,
			user_id: user.id,
		});
		res.status(200).json(book);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
