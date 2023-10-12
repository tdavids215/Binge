const nameInput = $('#name-input');
const emailInput = $('#email-input');
const passwordInput = $('#password-input');
const loginButton = $('#login-button');
const registerButton = $('#register-button');
const logoutButton = $('#logout-button');
const movieNameInput = $('#movie-name');
const movieDescriptionInput = $('#movie-description');
const addMoviePopup = $('#new-movie-popup');
const addMovieButton = $('#add-movie-button');
const addMovieDialog = document.getElementById('add-movie-dialog');
const isWatchedInput = $('#is-watched-input');

addMoviePopup.on('click', async function (event) {
	addMovieDialog.showModal();
	addMovieButton.on('click', async function (event) {
		const movieName = movieNameInput.val();
		const movieDescription = movieDescriptionInput.val();
		let isWatched = false;
		if (isWatchedInput.prop('checked')) isWatched = true;
		const result = await fetch('/movies', {
			method: 'POST',
			body: JSON.stringify({ movieName, movieDescription, isWatched }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (result.status === 200) {
			console.log('Movie added successfully');
			addMovieDialog.close();
			window.location.reload();
		}
		if (result.status === 500) console.log('Error adding movie');
	});
});

registerButton.on('click', async function (event) {
	event.preventDefault();
	const name = nameInput.val();
	const email = emailInput.val();
	const password = passwordInput.val();
	try {
		const response = await fetch('/register', {
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
			headers: { 'Content-Type': 'application/json' },
			redirect: 'follow',
		});
		if (response.redirected) window.location.href = response.url;

		if (response.status === 400 || response.status === 500) console.log(await response.json());
	} catch (err) {
		console.log(err);
	}
});

loginButton.on('click', async function (event) {
	event.preventDefault();
	const email = emailInput.val();
	const password = passwordInput.val();
	try {
		const response = await fetch('/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' },
			redirect: 'follow',
		});
		if (response.redirected) window.location.href = response.url;

		if (response.status === 400 || response.status === 500) console.log(await response.json());
	} catch (err) {
		console.log(err);
	}
});

logoutButton.on('click', async function (event) {
	event.preventDefault();
	try {
		const response = await fetch('/logout', {
			method: 'POST',
			redirect: 'follow',
		});
		if (response.redirected) window.location.href = response.url;
		if (response.status === 400 || response.status === 500) console.log(await response.json());
	} catch (err) {
		console.log(err);
	}
});
