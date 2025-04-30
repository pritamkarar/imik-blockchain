
$(document).ready(function () {
  $(".counter").countUp();

  $(".key-highlights-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 5,
      },
    },
  });
  
  $(".faculty-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });
  
  $(".read-more-button").click(function () {
    var $this = $(this);
    if ($this.hasClass("active")) {
      $this.prev(".read-more-content").slideUp();
      $this.removeClass("active").text("Read more +");
    } else {
      $this.prev(".read-more-content").slideDown();
      $this.addClass("active").text("Read less -");
    }
  });
  
  $("#get-started,#formEnroll,#headerEnroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#dvForm").offset().top - 120,
      },
      800
    );
    $("#txtName").focus();
  });
  
  $("#submitForm").click(function (e) {
    e.preventDefault();
    var isValid = validateExp();
    var formParameters = $("#imiForm").serialize();

    if (isValid) {
      $("#submitForm").attr("disabled", true);
      $.ajax({
        cache: false,
        type: "POST",
        url: "main.php",
        data: formParameters,
        success: function () {
          Swal.fire({
            title: "Enrollment request received!",
            text: "Thank you for your interest in our course. Check your email for further details.",
            icon: "success",
            showConfirmButton: false,
            showCloseButton: true
          });
          $("#imiForm").trigger("reset");
          $("#submitForm").attr("disabled", false);
        },
        error: function () {
          Swal.fire({
            title: "Error occurred!",
            text: "An error occurred while processing your request. Please try again.",
            icon: "error",
            showConfirmButton: false,
            showCloseButton: true
          });
          $("#submitForm").attr("disabled", false);
        },
      });
    }
  });
  
  $("#downloadForm").click(function (e) {
    e.preventDefault();
    var isValid = validateExpBrochure();
    var formParameters = $("#brochureForm").serialize();

    if (isValid) {
      $("#downloadForm").attr("disabled", true);
      $.ajax({
        cache: false,
        type: "POST",
        url: "download.php",
        data: formParameters,
        success: function (response) {
          fetch(response)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'imik-swaransh-blockchain-course-brochure.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          });
          $("#brochureModal").modal("toggle");
          $("#brochureForm").trigger("reset");
          $("#downloadForm").attr("disabled", false);
        },
        error: function () {
          Swal.fire({
            title: "Error occurred!",
            text: "An error occurred while processing your request. Please try again.",
            icon: "error",
            showConfirmButton: false,
            showCloseButton: true
          });
          $("#downloadForm").attr("disabled", false);
        },
      });
    }
  });
});

function moveFocus(type, current) {
  const nextInput = document.getElementById(`${type}${current + 1}`);
  if (nextInput && document.getElementById(`${type}${current}`).value) {
    nextInput.focus();
  }
}

function ischar(s) {
  var i;
  for (i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (!(c < "0" || c > "9")) {
      return false;
    }
  }
  return true;
}

function chkSpecialchar(s) {
  var i;
  for (i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (
      c == "!" ||
      c == "#" ||
      c == "'" ||
      c == "^" ||
      c == ":" ||
      c == '"' ||
      c == "*" ||
      c == ":" ||
      c == "(" ||
      c == ")" ||
      c == "+" ||
      c == "=" ||
      c == "|" ||
      c == "<" ||
      c == ">" ||
      c == "%" ||
      c == "?" ||
      c == "/" ||
      c == "@"
    ) {
      return false;
    }
  }
  return true;
}

function isNumberKey(evt, txt) {
  evt = evt || window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (
    charCode > 31 &&
    (charCode < 48 || charCode > 57) &&
    !(charCode >= 96 && charCode <= 105) &&
    charCode != 17 &&
    charCode != 86
  ) {
    if (txt == "number") {
      $("#spnMobileNumber").text("Alphabets/Special characters not allowed");
    }
    return false;
  }
  $("#spnMobileNumber").text("");
  return true;
}

function isInteger(e) {
  var t;
  for (t = 0; t < e.length; t++) {
    var r = e.charAt(t);
    if (r < "0" || r > "9") return !1;
  }
  return !0;
}

function validateURL(link) {
  // Regular expression to match a URL starting with https://, http://, www., and ending with .com followed by optional characters
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?[^\s]+\.com(?:\/.*)?$/i;
  return urlRegex.test(link);
}

function ValidateEmail(email) {
  var isValid = false;
  var regex =
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  isValid = regex.test(email);
  return isValid;
}

function validateExp() {
  var IsValid = true;

  var name = document.getElementById("txtName").value;
  if (name.trim() == "" || name.trim() == "Please enter your name") {
    $("#spnName").text("Please enter your name");
    IsValid = false;
  } else if (
    name.trim() != "" &&
    name.trim() != "Please enter your name" &&
    ischar(name.trim()) == false
  ) {
    $("#spnName").text("Please enter valid name");
    IsValid = false;
  } else if (!chkSpecialchar(name.trim())) {
    $("#spnName").text("Please enter valid name");
    IsValid = false;
  } else if (!onlyLettersAndNumbers(name.trim())) {
    $("#spnName").text("Please enter valid name in english");
    IsValid = false;
  } else {
    $("#spnName").text("");
  }

  //Mobile Number
  var phoneNumber = document.getElementById("txtPhone").value;
  if (phoneNumber == "" || phoneNumber == "Mobile Number") {
    $("#spnMobileNumber").text("Please enter your mobile number");
    IsValid = false;
  } else if (isInteger(phoneNumber) == false) {
    $("#spnMobileNumber").text("Please enter numbers only");
    IsValid = false;
  } else if (phoneNumber.length != 10) {
    $("#spnMobileNumber").text("Your Mobile Number must contain 10 digits");
    IsValid = false;
  } else if (
    phoneNumber == "0000000000" ||
    phoneNumber == "6666666666" ||
    phoneNumber == "7777777777" ||
    phoneNumber == "8888888888" ||
    phoneNumber == "9999999999" ||
    phoneNumber == "9876543210" ||
    phoneNumber == "0123456789"
  ) {
    $("#spnMobileNumber").text("Please enter valid Mobile Number");
    IsValid = false;
  } else if (/^[6-9][0-9]{9}$/.test(phoneNumber) == false) {
    $("#spnMobileNumber").text("Please enter valid Mobile Number");
    IsValid = false;
  } else {
    $("#spnMobileNumber").text("");
  }

  var email = document.getElementById("txtEmail").value;
  if (email.trim() == "" || email.trim() == "Email Address") {
    $("#spnEmail").text("Please enter your email address");
  } else if (ValidateEmail(email.trim()) == false) {
    $("#spnEmail").text("Please enter valid email address");
  } else {
    $("#spnEmail").text("");
  }

  var city = document.getElementById("txtCity").value;
  if (city.trim() == "" || city.trim() == "Please enter your City") {
    $("#spnCity").text("Please enter your city");
    IsValid = false;
  } else if (
    city.trim() != "" &&
    city.trim() != "Please enter your City" &&
    ischar(city.trim()) == false
  ) {
    $("#spnCity").text("Please enter valid city");
    IsValid = false;
  } else if (!chkSpecialchar(city.trim())) {
    $("#spnCity").text("Please enter valid city city");
    IsValid = false;
  } else if (!onlyLettersAndNumbers(city.trim())) {
    $("#spnCity").text("Please enter valid city name in english");
    IsValid = false;
  } else {
    $("#spnCity").text("");
  }

  if (IsValid) {
    return true;
  }
}

function validateExpBrochure() {
  var IsValid = true;

  var name = document.getElementById("txtNameBr").value;
  if (name.trim() == "" || name.trim() == "Please enter your name") {
    $("#spnNameBr").text("Please enter your name");
    IsValid = false;
  } else if (
    name.trim() != "" &&
    name.trim() != "Please enter your name" &&
    ischar(name.trim()) == false
  ) {
    $("#spnNameBr").text("Please enter valid name");
    IsValid = false;
  } else if (!chkSpecialchar(name.trim())) {
    $("#spnNameBr").text("Please enter valid name");
    IsValid = false;
  } else if (!onlyLettersAndNumbers(name.trim())) {
    $("#spnNameBr").text("Please enter valid name in english");
    IsValid = false;
  } else {
    $("#spnNameBr").text("");
  }

  //Mobile Number
  var phoneNumber = document.getElementById("txtPhoneBr").value;
  if (phoneNumber == "" || phoneNumber == "Mobile Number") {
    $("#spnMobileNumberBr").text("Please enter your mobile number");
    IsValid = false;
  } else if (isInteger(phoneNumber) == false) {
    $("#spnMobileNumberBr").text("Please enter numbers only");
    IsValid = false;
  } else if (phoneNumber.length != 10) {
    $("#spnMobileNumberBr").text("Your Mobile Number must contain 10 digits");
    IsValid = false;
  } else if (
    phoneNumber == "0000000000" ||
    phoneNumber == "6666666666" ||
    phoneNumber == "7777777777" ||
    phoneNumber == "8888888888" ||
    phoneNumber == "9999999999" ||
    phoneNumber == "9876543210" ||
    phoneNumber == "0123456789"
  ) {
    $("#spnMobileNumberBr").text("Please enter valid Mobile Number");
    IsValid = false;
  } else if (/^[6-9][0-9]{9}$/.test(phoneNumber) == false) {
    $("#spnMobileNumberBr").text("Please enter valid Mobile Number");
    IsValid = false;
  } else {
    $("#spnMobileNumberBr").text("");
  }

  var email = document.getElementById("txtEmailBr").value;
  if (email.trim() == "" || email.trim() == "Email Address") {
    $("#spnEmailBr").text("Please enter your email address");
  } else if (ValidateEmail(email.trim()) == false) {
    $("#spnEmailBr").text("Please enter valid email address");
  } else {
    $("#spnEmailBr").text("");
  }

  if (IsValid) {
    return true;
  }
}

function getValidationMessageName() {
  var name = document.getElementById("txtName").value;
  if (name.trim() == "" || name.trim() == "Please enter your name") {
    $("#spnName").text("Please enter your name");
  } else if (
    name.trim() != "" &&
    name.trim() != "Please enter your name" &&
    ischar(name.trim()) == false
  ) {
    $("#spnName").text("Please enter valid name");
  } else if (!chkSpecialchar(name.trim())) {
    $("#spnName").text("Please enter valid name");
  } else if (!onlyLettersAndNumbers(name.trim())) {
    $("#spnName").text("Please enter valid name in english");
  } else {
    $("#spnName").text("");
  }
}

function getValidationMessageCity() {
  var name = document.getElementById("txtName").value;
  if (name.trim() == "" || name.trim() == "Please enter your city") {
    $("#spnCity").text("Please enter your city");
  } else if (
    name.trim() != "" &&
    name.trim() != "Please enter your name" &&
    ischar(name.trim()) == false
  ) {
    $("#spnCity").text("Please enter valid city name");
  } else if (!chkSpecialchar(name.trim())) {
    $("#spnCity").text("Please enter valid city name");
  } else if (!onlyLettersAndNumbers(name.trim())) {
    $("#spnCity").text("Please enter valid city name in english");
  } else {
    $("#spnCity").text("");
  }
}

function onlyLettersAndNumbers(str) {
  return /^[a-zA-Z ]+$/.test(str);
}

function isAlphabetKey(evt, txt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (
    (!(charCode >= 65 && charCode <= 122) &&
      charCode != 32 &&
      charCode != 0 &&
      charCode > 31) ||
    (charCode >= 91 && charCode <= 96)
  ) {
    if (txt == "name") {
      $("#spnName").text("Special characters & numbers are not allowed");
    }
    return false;
  }
  $("#spnName").text("");
  return true;
}

function isAlphabetKeyCity(evt, txt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (
    (!(charCode >= 65 && charCode <= 122) &&
      charCode != 32 &&
      charCode != 0 &&
      charCode > 31) ||
    (charCode >= 91 && charCode <= 96)
  ) {
    if (txt == "city") {
      $("#spnCity").text("Special characters & numbers are not allowed");
    }
    return false;
  }
  $("#spnCity").text("");
  return true;
}
