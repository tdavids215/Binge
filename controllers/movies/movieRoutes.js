const router = require('express').Router();
const withAuth = require('../../utils/auth');
const User = require('../../models/User');
const Movie = require('../../models/Movie');

// /movies
router.get('/', withAuth, async (req, res) => {
	const userResult = await User.findOne({ where: { email: req.session.userEmail } });
	const user = userResult.get({ plain: true });
	const userMoviesResult = await Movie.findAll({ where: { user_id: user.id } });
	const userMovies = userMoviesResult.map((movie) => movie.get({ plain: true }));
	const watchedMovies = userMovies.filter((movie) => movie.is_watched === true);
	const unwatchedMovies = userMovies.filter((movie) => movie.is_watched === false);
	res.render('movies', { movies: userMovies, watchedMovies, unwatchedMovies, loggedIn: req.session.loggedIn });
});

router.post('/', withAuth, async (req, res) => {
	try {
		const { movieName, movieDescription, isWatched } = req.body;
		const user = await User.findOne({ where: { email: req.session.userEmail } });
		const movie = await Movie.create({
			name: movieName,
			description: movieDescription,
			is_watched: isWatched,
			user_id: user.id,
		});
		res.status(200).json(movie);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
