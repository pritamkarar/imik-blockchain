<section class="course-overview pt-5">
    <div class="container">
    <div class="row">
        <div class="col-lg-6 order-2 order-lg-1 pb-4 pb-lg-5">
        <h2>Course Overview</h2>
        <p style="font-size: 14px; text-align: justify">
            Gain a solid understanding of blockchain with the Certificate
            programme in Blockchain which is jointly provided by the Center of
            Applied Blockchain and Digital Transformation at IMI Kolkata and
            Swaransh IT Solutions Private Limited. Starting with the basics of
            blockchain, the participants will be able to build decentralized
            apps, smart contracts, and work on industry specific use-cases
            through hands-on capstone project. Transform your career with this
            blockchain certificate programme in just three months with 100
            hours of this certificate programme (4 months) and 2 months paid
            internship.
        </p>
        <p class="fw-bold">6 months comprehensive programme duration.</p>
        <ul class="list-unstyled row">
            <li class="col-sm-6">
            <h3>4 months</h3>
            <p>Classroom sessions and industry lectures</p>
            </li>
            <li class="col-sm-6">
            <h3>2 Months</h3>
            <p>Paid Internship</p>
            </li>
            <li class="col-sm-6">
            <h3>15 hours</h3>
            <p>Project work</p>
            </li>
        </ul>
        <a href="javascript:;" id="get-started" class="btn_submit mb-2"
            >Enroll Now</a
        >
        <a
            type="button"
            class="btn_submit"
            data-bs-toggle="modal"
            data-bs-target="#brochureModal"
            >Download Brochure</a
        >

        <!-- Modal -->
        <div
            class="modal fade"
            id="brochureModal"
            tabindex="-1"
            aria-labelledby="brochureModalLabel"
            aria-hidden="true"
        >
            <div
            class="modal-dialog modal-dialog-scrollable modal-dialog-centered"
            >
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="brochureModalLabel">
                    Download Brochure
                </h1>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
                </div>

                <form class="brochure-modal-content" id="brochureForm" method="POST" action="">
                <div class="form-group">
                    <label>
                    <input
                        type="text"
                        maxlength="50"
                        name="name"
                        onkeydown="return isAlphabetKey(event, 'name')"
                        id="txtNameBr"
                        class="form-control"
                        placeholder="Name"
                        required
                    />
                    </label>
                    <small id="spnNameBr" class="text-danger"></small>
                </div>
                <div class="form-group">
                    <label>
                    <input
                        type="email"
                        class="form-control"
                        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                        name="email"
                        id="txtEmailBr"
                        maxlength="50"
                        placeholder="Email"
                        required
                    />
                    </label>
                    <small id="spnEmailBr" class="text-danger"></small>
                </div>
                <div class="form-group">
                    <label>
                    <input
                        type="text"
                        class="form-control"
                        name="mobileno"
                        id="txtPhoneBr"
                        maxlength="10"
                        onkeydown="return isNumberKey(event,'number')"
                        placeholder="Mobile No."
                        required
                    />
                    </label>
                    <small id="spnMobileNumberBr" class="text-danger"></small>
                </div>
                <input type="hidden" name="city" value="" />

                <div class="position-relative text-center mt-4">
                    <button
                    id="downloadForm"
                    name="downloadForm"
                    class="btn btn-default btn_submit btn-md w-100"
                    >
                        Submit and Download
                        <span class="loader enroll-loader"></span>
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        <div
        class="col-lg-6 order-1 order-lg-2 pb-4 pb-lg-0 m-auto position-relative student-img"
        >
        <img
            src="images/courses-img.webp"
            class="img-fluid"
            alt="Course Overview"
        />
        </div>
    </div>
    </div>
</section>