import React from "react";

function Footer() {
  return (
    <div className="container-fluid footerSection mt-3">
      <div className="container-lg py-1">
      <footer className="py-5 pb-3">
        <div className="row">
          <div className="col-2">
            <h5>COMPANY INFO</h5>
            <ul className="nav flex-column mt-3">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Social Responsibility
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Affiliate
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Fashion Blogger
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5>HELP & SUPPORT</h5>
            <ul className="nav flex-column mt-3">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Shipping Info
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Returns
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  How to Order
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  How to Track
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Size Chart
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5>CUSTOMER CARE</h5>
            <ul className="nav flex-column  mt-3">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Payment
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Bonus Point
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Notices
                </a>
              </li>
            </ul>
          </div>

          <div className="col-5 offset-1">
            <form className="row">
              <div className="col-12 d-flex iconSection">
                <div className="col-9">
                  <h5>SOCIALS</h5>
                  <ul className="mt-3 list-unstyled d-flex socialIcon">
                    <li className="faceBook">
                      <a className="link-dark" href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="ms-3">
                      <a className="link-dark" href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="ms-3">
                      <a className="link-dark" href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="ms-3">
                      <a className="link-dark" href="#">
                        <i class="fa fa-snapchat" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="ms-3">
                      <a className="link-dark" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <h5>PLATFORMS</h5>
                  <ul className="mt-3 socialIcon-platform list-unstyled d-flex">
                    <li className="ms-0">
                      <a className="link-dark" href="#">
                        <i class="fa fa-android" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="ms-3">
                      <a className="link-dark" href="#">
                        <i class="fa fa-apple" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 mb-2 fw-bold">SIGN UP</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Your Email
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Email address"
                  fdprocessedid="ckdhhj"
                />
                <button
                  className="btn subscribeBtn rounded-0"
                  type="button"
                  fdprocessedid="dtrzos"
                >
                  SUBSCRIBE
                </button>
              </div>
              <p className="subscribeText mt-3">
                By Clicking the SUBSCRIBE button, you are agreeing to our
                <a style={{color: "#5582da"}} href="#"> Privacy & Cookie Policy</a>
              </p>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between pt-2 mt-2 infoSection">
          <div className="col-6 col-xl-5">
            <p>© 2010-2021 All Rights Reserved</p>
            <ul className="nav flex-row  mt-2">
              <li className="nav-item mb-2 me-3">
                <a href="#" className="nav-link p-0 text-decoration-underline">
                  Privacy Center
                </a>
              </li>
              <li className="nav-item mb-2 me-3">
                <a href="#" className="nav-link p-0 text-decoration-underline">
                  Privacy & Cookie Policy
                </a>
              </li>
              <li className="nav-item mb-2 me-3">
                <a href="#" className="nav-link p-0 text-decoration-underline">
                  Manage Cookies
                </a>
              </li>
              <li className="nav-item mb-2 me-3">
                <a href="#" className="nav-link p-0 text-decoration-underline">
                  Terms & Condition
                </a>
              </li>
              <li className="nav-item mb-2 me-3">
                <a href="#" className="nav-link p-0 text-decoration-underline">
                  Copyright Notice
                </a>
              </li>
              <li className="nav-item mb-2 me-3">
                <a href="#" className="nav-link p-0 text-decoration-underline">
                  Imprint
                </a>
              </li>
            </ul>
          </div>
          <div className="col-5 col-xl-5 offset-xl-2 offset-0 ps-4">
            <p className="fw-bold">We Accept</p>
            <ul className="nav flex-row mt-2 payCards">
              <li className="nav-item mb-2 pe-2">
                <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
              </li>
              <li className="nav-item mb-2 pe-2">
                <i class="fa fa-cc-paypal" aria-hidden="true"></i>
              </li>
              <li className="nav-item mb-2 pe-2">
                <i class="fa fa-credit-card" aria-hidden="true"></i>
              </li>
              <li className="nav-item mb-2 pe-2">
                <i class="fa fa-cc-visa" aria-hidden="true"></i>
              </li>
              <li className="nav-item mb-2 pe-2">
                <i class="fa fa-cc-amex" aria-hidden="true"></i>
              </li>
              <li className="nav-item mb-2 pe-2">
                <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
              </li>
              <li className="nav-item mb-2 pe-2">
                <i class="fa fa-cc-visa" aria-hidden="true"></i>
              </li>
              <li className="nav-item mb-2 pe-2">
                <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Footer;
