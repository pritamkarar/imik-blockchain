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

$(document).ready(function () {
  $("#send").click(function (e) {
    e.preventDefault();

    // Validate current form fields
    var result = validateExp();
    var resultData = $("#imiForm").serialize();
    if (result) {
      $("#send").attr("disabled", true);
      $.ajax({
        cache: false,
        type: "POST",
        url: "sendotp.php",
        data: resultData,
        success: function (data) {
          // Move to the next step
          $("#noramalform").hide(); // Hide the current step
          $("#formVerification").show(); // Show the next step
        },
        error: function (xhr, status, error) {
          //alert("An error occurred. Please try again.");
        },
      });
    }
  });

  $("#mobverfy").click(function (e) {
    // Serialize form data
    e.preventDefault();
    var resultData = $("#imiForm").serialize();
    var result = validateotpMobile();
    $("#spnMobile").text("");
    if (result) {
      $.ajax({
        cache: false,
        type: "POST",
        url: "validateotpmobile.php",
        data: resultData,
        success: function (data) {
          // Move to the next step
          if (data == "success") {
            //$('#imiForm').submit();
            $("#mobright").removeClass("d-none");
            $("#mobwrong").addClass("d-none");
            $("#mver").val("1");
          } else {
            $("#mobile-otp1").val("");
            $("#mobile-otp2").val("");
            $("#mobile-otp3").val("");
            $("#mobile-otp4").val("");
            $("#mobwrong").removeClass("d-none");
            $("#mobright").addClass("d-none");
            // $('#spnMobile').text('Please enter valid otp for mobile');
            $("#mver").val("0");
          }
        },
        error: function (xhr, status, error) {
          // alert("An error occurred. Please try again.");
        },
      });
    }
  });

  $("#emailverfy").click(function (e) {
    // Serialize form data
    e.preventDefault();
    var resultData = $("#imiForm").serialize();
    var result = validateotpEmail();
    $("#spnemailverfy").text("");
    if (result) {
      $.ajax({
        cache: false,
        type: "POST",
        url: "validateotpemail.php",
        data: resultData,
        success: function (data) {
          // Move to the next step
          if (data == "success") {
            //$('#imiForm').submit();
            $("#emailright").removeClass("d-none");
            $("#emailwrong").addClass("d-none");
            $("#ever").val("1");
          } else {
            $("#email-otp1").val("");
            $("#email-otp2").val("");
            $("#email-otp3").val("");
            $("#email-otp4").val("");
            $("#emailwrong").removeClass("d-none");
            $("#emailright").addClass("d-none");
            //$('#spnemail').text('Please enter valid otp for email');
            $("#ever").val("0");
          }
        },
        error: function (xhr, status, error) {
          // alert("An error occurred. Please try again.");
        },
      });
    }
  });

  $("#submitForm").click(function (e) {
    // Serialize form data
    e.preventDefault();
    var resultData = $("#imiForm").serialize();
    var result = validateotp();
    if (result) {
      $.ajax({
        cache: false,
        type: "POST",
        url: "validateotp.php",
        data: resultData,
        success: function (data) {
          // Move to the next step
          if (data == "success") {
            $("#imiForm").submit();
          } else {
            $("#emailwrong").removeClass("d-none");
            $("#mobwrong").removeClass("d-none");
            $("#spnemailverfy").text(
              "Please enter valid otp for mobile and email"
            );
          }
        },
        error: function (xhr, status, error) {
          // alert("An error occurred. Please try again.");
        },
      });
    }
  });
});

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

function ValidateAddress(address) {
  // Regular expression to allow only letters, numbers, spaces, commas, periods, hyphens, and pound signs in the address
  var regex = /^[a-zA-Z0-9\s\.,#-]+$/;
  return regex.test(address);
}

function validateotpMobile() {
  var IsValid = true;
  var mobileotp1 = document.getElementById("mobile-otp1").value;
  if (mobileotp1.trim() == "") {
    $("#spnMobile").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnMobile").text("");
  }

  var mobileotp2 = document.getElementById("mobile-otp2").value;
  if (mobileotp2.trim() == "") {
    $("#spnMobile").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnMobile").text("");
  }

  var mobileotp3 = document.getElementById("mobile-otp3").value;
  if (mobileotp3.trim() == "") {
    $("#spnMobile").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnMobile").text("");
  }

  var mobileotp4 = document.getElementById("mobile-otp4").value;
  if (mobileotp4.trim() == "") {
    $("#spnMobile").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnMobile").text("");
  }

  if (IsValid) {
    return true;
  }
}

function validateotpEmail() {
  var IsValid = true;

  var emailotp1 = document.getElementById("email-otp1").value;
  if (emailotp1.trim() == "") {
    $("#spnemailverfy").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnemailverfy").text("");
  }

  var emailotp2 = document.getElementById("email-otp2").value;
  if (emailotp2.trim() == "") {
    $("#spnemailverfy").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnemailverfy").text("");
  }

  var emailotp3 = document.getElementById("email-otp3").value;
  if (emailotp3.trim() == "") {
    $("#spnemailverfy").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnemailverfy").text("");
  }

  var emailotp4 = document.getElementById("email-otp4").value;
  if (emailotp4.trim() == "") {
    $("#spnemailverfy").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnemailverfy").text("");
  }

  if (IsValid) {
    return true;
  }
}

function validateotp() {
  var IsValid = true;
  var mobileotp1 = document.getElementById("mobile-otp1").value;
  if (mobileotp1.trim() == "") {
    $("#spnMobile").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnMobile").text("");
  }

  var mobileotp2 = document.getElementById("mobile-otp2").value;
  if (mobileotp2.trim() == "") {
    $("#spnMobile").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnMobile").text("");
  }

  var mobileotp3 = document.getElementById("mobile-otp3").value;
  if (mobileotp3.trim() == "") {
    $("#spnMobile").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnMobile").text("");
  }

  var mobileotp4 = document.getElementById("mobile-otp4").value;
  if (mobileotp4.trim() == "") {
    $("#spnMobile").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnMobile").text("");
  }

  var emailotp1 = document.getElementById("email-otp1").value;
  if (emailotp1.trim() == "") {
    $("#spnemailverfy").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnemailverfy").text("");
  }

  var emailotp2 = document.getElementById("email-otp2").value;
  if (emailotp2.trim() == "") {
    $("#spnemailverfy").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnemailverfy").text("");
  }

  var emailotp3 = document.getElementById("email-otp3").value;
  if (emailotp3.trim() == "") {
    $("#spnemailverfy").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnemailverfy").text("");
  }

  var emailotp4 = document.getElementById("email-otp4").value;
  if (emailotp4.trim() == "") {
    $("#spnemailverfy").text("Please enter otp");
    IsValid = false;
  } else {
    $("#spnemailverfy").text("");
  }

  if (IsValid) {
    return true;
  }
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
