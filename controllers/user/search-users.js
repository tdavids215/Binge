const router = require('express').Router();
const withAuth = require('../../utils/auth');
const User = require('../../models/User');
const Song = require('../../models/Song');
const Book = require('../../models/Book');
const Movie = require('../../models/Movie');

// /search

router.get('/', withAuth, async (req, res) => {
	res.render('search');
});

router.get('/:id', withAuth, async (req, res) => {
	try {
		const searchId = req.params.id;
		const userData = await User.findOne({ where: { id: searchId } });
		if (!userData) return res.status(404).json({ message: 'No user found' });
		const user = userData.get({ plain: true });

		const songsData = await Song.findAll({ where: { user_id: user.id } });
		const songs = songsData.map((song) => song.get({ plain: true }));
		const heardSongs = songs.filter((song) => song.listened === true);
		const songLength = heardSongs.length;
		const unheardSongs = songs.filter((song) => song.listened === false);

		const booksData = await Book.findAll({ where: { user_id: user.id } });
		const books = booksData.map((book) => book.get({ plain: true }));
		const readBooks = books.filter((book) => book.is_read === true);
		const bookLength = readBooks.length;
		const unreadBooks = books.filter((book) => book.is_read === false);

		const moviesData = await Movie.findAll({ where: { user_id: user.id } });
		const movies = moviesData.map((movie) => movie.get({ plain: true }));
		const watchedMovies = movies.filter((movie) => movie.is_watched === true);
		const movieLength = watchedMovies.length;
		const unwatchedMovies = movies.filter((movie) => movie.is_watched === false);

		res
			.status(200)
			.render('search', {
				user,
				heardSongs,
				unheardSongs,
				readBooks,
				unreadBooks,
				watchedMovies,
				unwatchedMovies,
				songLength,
				bookLength,
				movieLength,
			});
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
