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

var date;

var vet;

function validatePhone() {
  var a = document.theform.telephone.value;
  var filter = /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/;
  if(filter.test(a)) {
      return true;
  } else {
      return false;
  }
}

function validateEmail(email) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return (true)
  }
    return (false)
}

const picker = document.theform.date;
picker.addEventListener('input', function(e){
  var day = new Date(this.value).getUTCDay();
  if([6,0].includes(day)){
    e.preventDefault();
    this.value = '';
    alert('Please select a week day.');
  }
});

/////////////////////////////////////////////////////////////////////////////////////////
// Form validation
/////////////////////////////////////////////////////////////////////////////////////////
function validateForm() {
  var formValid = true;

  if(document.theform.name.value == "") {
    alert("Please provide your name");
    document.theform.name.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if(validateEmail(document.theform.email.value) == false) {
    alert("Please provide a valid email");
    document.theform.email.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if(validatePhone() == false) {
    alert("Please provide a valid phone number");
    document.theform.telephone.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if((document.theform.service1.checked || document.theform.service2.checked || document.theform.service3.checked || document.theform.service4.checked || document.theform.service5.checked) == false) {
    alert('You must choose a service');
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if((document.theform.vet1.checked || document.theform.vet2.checked || document.theform.vet3.checked) == false) {
    alert('You must choose a veterinarian');
    formValid = false;
    return formValid;
  } else {
    if(document.theform.vet1.checked) {
      vet = document.theform.vet1.value;
      formValid = true;
    } else if(document.theform.vet2.checked) {
      vet = document.theform.vet2.value;
      formValid = true;
    } else if(document.theform.vet3.checked) {
      vet = document.theform.vet3.value;
      formValid = true;
    }
  }

  if(!document.theform.date.value) {
    alert('You must choose a date for your visit');
    formValid = false;
    return formValid;
  } else {
    date = document.theform.date.value;
    formValid = true;
  }

  if (formValid == true) {
    $('#paymentModal').modal('show');
    $('#modal').modal('hide');
    return formValid;
  } else {
    $('#modal').modal('show');
    return formValid;
  }
}

function validateExpDate() {
  var today, someday;
  var exMonth=document.getElementById("exMonth");
  var exYear=document.getElementById("exYear");
  today = new Date();
  someday = new Date();
  someday.setFullYear(exYear, exMonth, 1);

  if (someday < today) {
    return false;
}
}

/////////////////////////////////////////////////////////////////////////////////////////
// Payment validation
/////////////////////////////////////////////////////////////////////////////////////////
function validatePayment() {
  var formValid = true;

  if(document.paymentform.name.value == "") {
    alert("Please provide your name");
    document.paymentform.name.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if(validateEmail(document.paymentform.email.value) == false) {
    alert("Please provide a valid email");
    document.paymentform.email.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if(document.paymentform.address.value == "") {
    alert("Please provide your address");
    document.paymentform.address.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if(document.paymentform.city.value == "") {
    alert("Please provide your city");
    document.paymentform.city.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }
  
  if(document.paymentform.cardname.value == "") {
    alert("Please provide the name on the card");
    document.paymentform.cardname.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if((document.paymentform.cardnumber.value.length) != 16) {
    alert("Please provide a valid credit card number (only 16 numbers are allowed)");
    document.paymentform.cardnumber.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if((document.paymentform.cvv.value.length) != 3) {
    alert("Please provide a valid CVV number (only 3 numbers are allowed)");
    document.paymentform.name.focus();
    formValid = false;
    return formValid;
  } else {
    formValid = true;
  }

  if (formValid == true) {
    $('#confirmationModal').modal('show');
    $('#paymentModal').modal('hide');
    document.getElementById('confirmationMessage').innerHTML = "Your appointment with " + vet + "has been confirmed for " + date + "! You will receive an email in the next couple hours with all the details.";
    return formValid;
  } else {
    $('#paymentModal').modal('show');
    return formValid;
  }
}