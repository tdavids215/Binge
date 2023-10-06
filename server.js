const express = require('express');
const app = express();
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const port = process.env.PORT || 3001;

// const sessionInfo = {
// 	secret: process.env._SESSION_INFO,
// 	cookie: {},
// 	resave: false,
// 	saveUninitialized: true,
// 	store: new SequelizeStore({
// 		db: sequelize,
// 	}),
// };

// app.use(session(sessionInfo));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
