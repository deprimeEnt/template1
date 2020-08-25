var slideIndex1 = 0;
text1();

function text1() {
    var i;
    var x = document.getElementsByClassName("servicelist-header-list");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex1++;
    if (slideIndex1 > x.length) {slideIndex1 = 1} 
    x[slideIndex1-1].style.display = "block"; 
    setTimeout(text1, 5000); 
}



