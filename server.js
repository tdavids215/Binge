const path = require('path');
const express = require('express');
const app = express();
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
require('dotenv').config();
const port = process.env.PORT || 3001;

app.use(
	session({
		secret: process.env.SESSION_INFO,
		cookie: {},
		resave: false,
		saveUninitialized: false,
		store: new SequelizeStore({
			db: sequelize,
		}),
	})
);

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
});
