var boxTemplate = document.getElementById("box-template").innerHTML;


var compiledTemplate = Handlebars.compile(boxTemplate);

var box1Content = "Box 1";
var box1ImageSource = "./assets/song.jpg";
var box1ImageAlt = "Image 1 description";
var box1Link = "https://example.com/song";
var box2Content = "Box 2";
var box2ImageSource = "./assets/Movie.jpg";
var box2ImageAlt = "Image 2 description";
var box2Link = "https://example.com/movie";
var box3Content = "Box 3";
var box3ImageSource = "./assets/books.jpg";
var box3ImageAlt = "Image 3 description";
var box3Link = "https://example.com/books";

var generatedHTML = compiledTemplate({
    box1Content: box1Content,
    box1ImageSource: box1ImageSource,
    box1ImageAlt: box1ImageAlt,
    box1Link: box1Link,
    box2Content: box2Content,
    box2ImageSource: box2ImageSource,
    box2ImageAlt: box2ImageAlt,
    box2Link: box2Link,
    box3Content: box3Content,
    box3ImageSource: box3ImageSource,
    box3ImageAlt: box3ImageAlt,
    box3Link: box3Link
});

document.body.innerHTML = generatedHTML;
