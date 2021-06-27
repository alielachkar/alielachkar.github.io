// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function validateForm() {
  if(document.theform.name.value == "") {
    alert( "Please provide your name!" );
    document.theform.Name.focus() ;
    return false;
  }

  if(document.theform.email.value == "") {
    alert( "Please provide your Email!" );
    document.theform.email.focus() ;
    return false;
  }

  if(document.theform.telephone.value == "") { 
    alert( "Please provide a zip in the format #####." );
    document.theform.telephone.focus() ;
    return false;
  }
  return(true);
}