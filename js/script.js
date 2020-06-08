// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

// Show and hide captions on photos - Inspirations page

function showCaption1() {
	document.getElementById("caption1").style.display = "block";
}

function hideCaption1() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth > 800) {
	document.getElementById("caption1").style.display = "none";
  }
}

function showCaption2() {
	document.getElementById("caption2").style.display = "block";
}

function hideCaption2() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth > 800) {
	document.getElementById("caption2").style.display = "none";
  }
}

function showCaption3() {
	document.getElementById("caption3").style.display = "block";
}

function hideCaption3() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth > 800) {
	document.getElementById("caption3").style.display = "none";
  }
}

function showCaption4() {
	document.getElementById("caption4").style.display = "block";
}

function hideCaption4() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth > 800) {
	document.getElementById("caption4").style.display = "none";
  }
}

function showMenu() {
  	document.getElementById("nav").style.display = "grid";
  	document.getElementById("show-menu").style.display = "none";
  	document.getElementById("hide-menu").style.display = "block";
  	document.body.style.overflow = "hidden";
}

function hideMenu() {
  	document.getElementById("nav").style.display = "none";
  	document.getElementById("show-menu").style.display = "block";
  	document.getElementById("hide-menu").style.display = "none";
  	document.body.style.overflow = "scroll";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = scrollFunction();
console.log('dupa123');

function scrollFunction() {
    console.log('dupa', document.body.scrollTop);
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("goback").style.display = "block";
    } else {
        document.getElementById("goback").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goBack() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 