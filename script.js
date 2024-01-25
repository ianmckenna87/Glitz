//Zoom function
function zoom(event){
console.log("test");

let pic = event.target.style;

if (pic.width === "25vw"){

    pic.width = "50vw";
    pic.height = "50vw";
    
}else{
    pic.width = "25vw";
    pic.height = "25vw";
}

}

//carousel function:
function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//main body of script:
var slideIndex = 0;
carousel();