	// Add an event listener to the movie form submit button
		document.getElementById("add-movie-form").addEventListener("submit", function(event) {
			event.preventDefault();
			
			// Get the form data from the user
			var title = document.getElementById("movie-title").value;
			var genre = document.getElementById("movie-genre").value;
			var year = document.getElementById("movie-year").value;
			
			// Create a new movie item object with the form data
			var newMovie = {
				title: title,
				genre: genre,
				year: year
			};
			
			// Add the new movie item to the movie list
			var movieList = document.getElementById("movie-list");
			var newMovieItem = document.createElement("li");
			newMovieItem.textContent = newMovie.title + " (" + newMovie.year + ") - " + newMovie.genre;
			movieList.appendChild(newMovieItem);
			
			// Display a message to confirm that the movie has been added
			alert(title + " has been added to your watchlist!");
		});
		
		// Add an event listener to the song form submit button
		document.getElementById("add-song-form").addEventListener("submit", function(event) {
			event.preventDefault();
			
			// Get the form data from the user
			var title = document.getElementById("song-title").value;
			var genre = document.getElementById("song-genre").value;
			var year = document.getElementById("song-year").value;
			
			// Create a new song item object with the form data
			var newSong = {
				title: title,
				genre: genre,
				year: year
			};
			
			// Add the new song item to the song list
			var songList = document.getElementById("song-list");
			var newSongItem = document.createElement("li");
			newSongItem.textContent = newSong.title + " (" + newSong.year + ") - " + newSong.genre;
			songList.appendChild(newSongItem);
			
			// Display a message to confirm that the song has been added
			alert(title + " has been added to your watchlist!");
		});