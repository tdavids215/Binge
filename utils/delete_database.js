const sequelize = require('../config/connection');
const User = require('../models/User');

// -----> uncomment each function call to either delete all data or show all data in the user model <-----

async function showDatabase() {
	const results = await User.findAll({});
	const user = results.map((result) => result.get({ plain: true }));
	user.forEach((user) => console.log(user));
}

// showDatabase();

async function deleteAllData() {
	try {
		await sequelize.sync({});
		console.log('connection synced');
		await User.destroy({
			where: {},
		});
		console.log('All data has been deleted');
	} catch (error) {
		if (error) console.log(error);
	}
}

// deleteAllData();
