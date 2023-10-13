const router = require('express').Router();
const withAuth = require('../../utils/auth');
const User = require('../../models/User');
const Song = require('../../models/Song');

// /songs
router.get('/', withAuth, async (req, res) => {
	const userData = await User.findOne({ where: { email: req.session.userEmail } });
	const user = userData.get({ plain: true });
	const userSongsData = await Song.findAll({ where: { user_id: user.id } });
	const userSongs = userSongsData.map((song) => song.get({ plain: true }));
	res.render('songs', { songs: userSongs });
});

router.post('/', withAuth, async (req, res) => {
	try {
		const { songName, songDescription, haveListened } = req.body;
		const userData = await User.findOne({ where: { email: req.session.userEmail } });
		const user = userData.get({ plain: true });
		const song = await Song.create({
			name: songName,
			description: songDescription,
			listened: haveListened,
			user_id: user.id,
		});
		res.status(200).json(song);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
