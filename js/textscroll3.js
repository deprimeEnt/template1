var slideIndex3 = 0;
text3();

function text3() {
    var i;
    var x = document.getElementsByClassName("mobile-servicelist-header-list");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex3++;
    if (slideIndex3 > x.length) {slideIndex3 = 1} 
    x[slideIndex3-1].style.display = "block"; 
    setTimeout(text3, 5000); 
}

