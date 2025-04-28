<!DOCTYPE html>
<html lang="en">
  <meta http-equiv="content-type" content="text/html;charset=UTF-8" />

  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>IMIK Blockchain Certification Course</title>

    <?php include 'metatags.php'; ?>

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="images/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="images/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="images/favicon/favicon-16x16.png"
    />

    <!-- Preconnect for Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com/"
      crossorigin="anonymous"
    />

    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;family=Staatliches&amp;display=swap"
      rel="stylesheet"
    />

    <!-- Bootstrap (Critical CSS) -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />

    <!-- Lazy-Load Non-Critical CSS (Defer loading) -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    />

    <link
      rel="stylesheet"
      href="css/owl.carousel.min.css"
      media="print"
      onload="this.media='all'"
    />
    <link
      rel="stylesheet"
      href="css/owl.theme.default.min.css"
      media="print"
      onload="this.media='all'"
    />
    <link
      rel="stylesheet"
      href="css/jquery.fancybox.min.css"
      media="print"
      onload="this.media='all'"
    />
    <link
      rel="stylesheet"
      href="css/font-awesome.min.css"
      media="print"
      onload="this.media='all'"
    />
    <link
      rel="stylesheet"
      href="css/aos.css"
      media="print"
      onload="this.media='all'"
    />
    <link
      rel="stylesheet"
      href="css/fonts.css"
      media="print"
      onload="this.media='all'"
    />
    <link
      rel="stylesheet"
      href="css/footer.css"
      media="print"
      onload="this.media='all'"
    />

    <link rel="stylesheet" href="css/style.css" />    
    <style>
      .splashscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
      }

      .splash{
          display: block;
      }

      .splashscreenhide {
          display: none;
      }

      .spinner{
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
      }

      .splash-logo .imi-logo {
          width: 75px
      }

      .splash-logo img.logo {
          width: 91px
      }

      .splash-left-img{
          margin-left: -50px;
      }

      .loader {
          width: 70px;
          padding: 5px;
          aspect-ratio: 1;
          border-radius: 50%;
          background: #552cacd3;
          --_m: 
            conic-gradient(#0000 10%,#000),
            linear-gradient(#000 0 0) content-box;
          -webkit-mask: var(--_m);
                  mask: var(--_m);
          -webkit-mask-composite: source-out;
                  mask-composite: subtract;
          animation: loading 1s infinite linear;
        }
        @keyframes loading {to{transform:rotate(360deg)}}

        @media (max-width:425px) {
          .splash-left-img{
              margin-left:0;
          }
        }
    </style>

    <!-- Fallback for Non-Critical CSS for Older Browsers -->
    <noscript>
      <link rel="stylesheet" href="css/owl.carousel.min.css" />
      <link rel="stylesheet" href="css/owl.theme.default.min.css" />
      <link rel="stylesheet" href="css/jquery.fancybox.min.css" />
      <link rel="stylesheet" href="css/font-awesome.min.css" />
      <link rel="stylesheet" href="css/aos.css" />
      <link rel="stylesheet" href="css/fonts.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/footer.css" />
    </noscript>
  </head>

  <body data-spy="scroll" data-target="#navbarNav" data-offset="50">
    <div id="splashscreen" class="splash">
        <div class="splashscreen">
          <div class="spinner">
            <div class="loader"></div>
            <h5>Loading</h5>
          </div>
          <a class="splash-logo">
            <img
              src="images/sis-logo.png"
              alt="Swaransh IT Solutions"
              class="splash-left-img border-right"
            />
            <img src="images/imi-logo.png" class="imi-logo" alt="IMIK" />
          </a>
        </div>
    </div>

    <main id="main" style="display: none">

      <?php include 'partial/navbar.php'; ?>

      <section class="form_section top_first position-relative">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 p-0">
              <div class="container">
                <div class="row g-0">
                  <div class="col-lg-8 col-sm-6">
                    <div
                      class="banner_content_bg"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div class="banner_content pt-4">
                        <h1
                          class="staatliches-regular"
                          data-aos="fade-right"
                          data-aos-delay="400"
                        >
                          <span
                            >Kickstart Your Career in<br />
                            Blockchain With Our</span
                          >
                          Certificate programme in Blockchain
                        </h1>
                      </div>
                    </div>
                    <img
                      src="images/student.webp"
                      class="img-fluid berger_model"
                      alt="Model"
                      data-aos="fade-up"
                      data-aos-delay="700"
                    />
                  </div>
                  <div
                    class="col-lg-4 col-sm-6 position-static z-index_99 form-mobile-top-height"
                  >
                    <div
                      class="my-3 form-width"
                      id="dvForm"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div class="bg-white form_body box-shadow">
                        <div class="form-default">
                          <div class="form_content">
                            <form id="imiForm" method="POST" action="">
                              <div class="px-lg-5 px-3 py-5">
                                <div id="noramalform">
                                  <h3 class="pb-1 m-0">Get Started</h3>
                                  <p>Fill up the form and enroll now</p>
                                  <div class="form-group">
                                    <label>
                                      <span>Name*</span>
                                      <input
                                        type="text"
                                        maxlength="50"
                                        name="name"
                                        onchange="getValidationMessageName();"
                                        onkeydown="return isAlphabetKey(event, 'name')"
                                        id="txtName"
                                        class="form-control"
                                        required=""
                                        placeholder="Name*"
                                      />
                                    </label>
                                    <small
                                      id="spnName"
                                      class="text-danger"
                                    ></small>
                                  </div>
                                  <div class="form-group">
                                    <label>
                                      <span>Email*</span>
                                      <input
                                        type="email"
                                        class="form-control"
                                        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                        name="email"
                                        id="txtEmail"
                                        maxlength="50"
                                        placeholder="Email*"
                                      />
                                    </label>
                                    <small
                                      id="spnEmail"
                                      class="text-danger"
                                    ></small>
                                  </div>
                                  <div class="form-group">
                                    <label>
                                      <span>Mobile Number*</span>
                                      <input
                                        type="text"
                                        class="form-control"
                                        name="mobileno"
                                        id="txtPhone"
                                        maxlength="10"
                                        onkeydown="return isNumberKey(event,'number')"
                                        required=""
                                        placeholder="Mobile No.*"
                                      />
                                    </label>
                                    <small
                                      id="spnMobileNumber"
                                      class="text-danger"
                                    ></small>
                                  </div>
                                  <div class="form-group">
                                    <label>
                                      <span>City*</span>
                                      <input
                                        type="text"
                                        onchange="getValidationMessageCity();"
                                        onkeydown="return isAlphabetKeyCity(event, 'city')"
                                        maxlength="50"
                                        name="city"
                                        id="txtCity"
                                        class="form-control"
                                        required=""
                                        placeholder="City*"
                                      />
                                    </label>
                                    <small
                                      id="spnCity"
                                      class="text-danger"
                                    ></small>
                                  </div>
                                  <div class="text-center mt-3">
                                    <button
                                      id="submitForm"
                                      name="submitForm"
                                      class="btn btn-default btn_submit btn-md w-100"
                                    >
                                      Enroll Now
                                    </button>
                                  </div>
                                </div>
                                <div class="loading d-none"></div>
                                <div class="clearfix"></div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="calendar">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 py-3 py-lg-0">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <div class="icon-container-calender calender-icon1">
                    <img
                      src="images/core-management-subjects.webp"
                      class="img-fluid"
                      alt="Bridging Theory With Practice"
                    />
                  </div>
                </div>
                <div
                  class="flex-grow-1 ms-1 ms-lg-3 d-inline-flex align-items-center"
                >
                  <h3 class="poppins-medium pe-3 m-0">
                    <span class="counter">6</span>
                  </h3>
                  <p class="poppins-semibold m-0">
                    Months <br />programme <br />Duration
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 py-3 py-lg-0">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <div class="icon-container-calender calender-icon2 mb-0">
                    <img
                      src="images/months-programme-duration.webp"
                      class="img-fluid"
                      alt="Bridging Theory With Practice"
                    />
                  </div>
                </div>
                <div
                  class="flex-grow-1 ms-1 ms-lg-3 d-inline-flex align-items-center"
                >
                  <h3 class="poppins-medium pe-3 m-0">
                    <span class="counter">2</span>
                  </h3>
                  <p class="poppins-semibold m-0">
                    Months<br />
                    Paid<br />
                    Internship
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 py-3 py-lg-0">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <div class="icon-container-calender calender-icon3">
                    <img
                      src="images/provisional-offer.webp"
                      class="img-fluid"
                      alt="Bridging Theory With Practice"
                    />
                  </div>
                </div>
                <div
                  class="flex-grow-1 ms-1 ms-lg-3 d-inline-flex align-items-center"
                >
                  <p class="poppins-semibold m-0">
                    Career<br />
                    Guidance From <br />
                    Global Experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <?php include 'partial/about.php'; ?>
      <?php include 'partial/key-highlights.php'; ?>
      <?php include 'partial/course-overview.php'; ?>
      <?php include 'partial/eligibility.php'; ?>
      <?php include 'partial/curriculum.php'; ?>
      <?php include 'partial/faculty.php'; ?>
      <?php include 'partial/apply-process.php'; ?>    
      <?php include 'partial/directors.php'; ?>
      <?php include 'partial/fees.php'; ?>
      <?php include 'partial/faq.php'; ?>

      <section class="py-5 text-center">
        <div class="container">
          <div class="row">
            <div class="col-12 parallax2 py-5 border-red">
              <h2 class="text-white py-4">
                Begin Your Journey in Blockchain Today!
              </h2>
              <a href="javaScript:;" id="formEnroll" class="btn_submit"
                >Enroll Now</a
              >
            </div>
          </div>
        </div>
      </section>

      <?php include 'partial/footer.php'; ?>
      <?php include 'partial/terms-modal.php'; ?>    
    </main>

    <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script defer type="text/javascript" src="js/owl.carousel.min.js"></script>
    <script defer type="text/javascript" src="js/jquery.fancybox.min.js"></script>
    <script defer type="text/javascript" src="js/lazysizes.min.js"></script>
    <script defer type="text/javascript" src="js/aos.js"></script>
    <script defer type="text/javascript" src="js/custom.js"></script>
    <script defer type="text/javascript" src="js/jquery.countup.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
    <script type="text/javascript">
      $(document).ready( function() { 
          $('#splashscreen').hide();
          $('#main').show(); 
      }); 
    </script>
  </body>
</html>