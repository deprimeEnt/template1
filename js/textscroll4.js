var slideIndex4 = 0;
text4();

function text4() {
	
    var i;
    var x = document.getElementsByClassName("mobile-service-list");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex4++;
    if (slideIndex4 > x.length) {slideIndex4 = 1} 
    x[slideIndex4-1].style.display = "block"; 
    setTimeout(text4, 1000); 
}

