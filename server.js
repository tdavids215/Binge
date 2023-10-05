const express = require('express');
const app = express();
const routes = require('./controllers');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
