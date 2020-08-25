var slideIndex2 = 0;
text2();

function text2() {
	
    var i;
    var x = document.getElementsByClassName("service-list");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex2++;
    if (slideIndex2 > x.length) {slideIndex2 = 1} 
    x[slideIndex2-1].style.display = "block"; 
    setTimeout(text2, 1000); 
}

