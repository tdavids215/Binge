var toWatch = ["The Godfather", "The Shawshank Redemption", "The Dark Knight"];
var watched = ["Bohemian Rhapsody - Queen", "Stairway to Heaven - Led Zeppelin", "Hotel California - Eagles"];

// Compile the movie template
var movieTemplate = Handlebars.compile(document.getElementById("movie-template").innerHTML);

// Define the dynamic content for the movie list
var movieList = {
    toWatch: toWatch,
    watched: watched
};

// Generate the HTML code using the compiled template and dynamic content
var generatedHTML = movieTemplate(movieList);

// Add the generated HTML code to the main section of the HTML document
document.querySelector("main").innerHTML += generatedHTML;