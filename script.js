// I unfortunately was not able to get multiple images by clicking
// the button multiple times. Here is one of my attempts on top of adding a return
// to the given function:
 
// function masterFunction(){ 
//     addText();
//     getCatImage();
// }
// function addText(){
//     document.getElementsByClassName('.image-container').innerHTML +=
//     "<img src="meow.JPG" id="catImage" alt="cat image" />"
//     ;
// }
 
 
function getCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
        // A 'return' was added.
           return response.json();
        })
        .then((data) => {
            console.log(data[0].url);
            document.getElementById("catImage").src = data[0].url;
        });
}