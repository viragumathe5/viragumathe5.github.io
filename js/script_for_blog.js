var aText = new Array(
    "Heya!!!!  Hello Again",
    "",
    "SO before you start with my blogs, I write about NLP, Data Science and somtimes in related topics.",
    "",
    "Thank You :)",
    "------>",
    
    
                          );
      var iSpeed = 50; // time delay of print out
      var iIndex = 0; // start printing array at this posision
      var iArrLength = 60; // the length of the text array
      var iScrollAt = 20; // start scrolling up at this many lines

      var iTextPos = 0; // initialise text position
      var sContents = ''; // initialise contents variable
      var iRow; // initialise current row

      function typewriter()
      {
        sContents =  ' ';
        iRow = Math.max(0, iIndex-iScrollAt);
        var destination = document.getElementById("typedtext");

        while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
                                }    
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
        if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 500);
          }
        } else {
        setTimeout("typewriter()", iSpeed);
        }
        }


        typewriter();

        var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}
});
}


