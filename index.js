// All switching images for the index page 
var images = ["images/children1.jpg", "images/children3.jpg", "images/Overwatch1.jpg"];
var slide = document.getElementById("slideshow-images");
var n = 0;
var dots = document.getElementsByClassName("dot")

function showImage() {
    document.getElementById("slideshow").innerHTML = "<img src='"+images[n]+"' width='100%' id='slideshow-images' class='fade'><div class='caption'>Best Summer Camp for Gamers</div>";
    for(j=0;j<dots.length;j++){
        dots[j].className = dots[j].className.replace(" active", "")
    }
    dots[n].className += " active"
}
function switchImage(i) {
    if(i==-1){
        n--;
        if(n<0){
            n=images.length-1;
        }
        return showImage();
    }
    if(i==1){
        n++;
        if(n>images.length-1){
            n=0;
        }
        return showImage();
    }
}

function switchImageWithDot(i) {
    n=i;
    showImage();
}