import React from "react"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
      <div>
        <div className="section hero-full-height over-hide">
          <div className="home-moving-image" />
          <div className="dark-over-video" />
          <div className="hero-center-section ver-2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 parallax-fade-top">
                  <div className="hero-text-ver-2">For the Joy<br />of Life</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section background-dark z-too-big">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row justify-content-center home-translate">
                  <div className="col-xl-8">
                    <div className="row justify-content-center home-shadow">
                      <div className="col-md-6 px-sm-0">
                        <div className="booking-sep-wrap">
                          <div className="input-daterange input-group" id="flight-datepicker-1">
                            <div className="form-item">
                              <span className="fontawesome-calendar" />
                              <input className="input-sm" type="text" autoComplete="off" id="start-date" name="start" placeholder="check-in" data-date-format="DD, MM d" />
                              <span className="date-text date-depart" />
                            </div>
                            <div className="form-item">
                              <span className="fontawesome-calendar" />
                              <input className="input-sm" type="text" autoComplete="off" id="end-date" name="end" placeholder="check-out" data-date-format="DD, MM d" />
                              <span className="date-text date-return" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 px-sm-0">
                        <div className="quantity">
                          <input type="number" min={1} max={9999} step={1} defaultValue={1} />
                        </div>
                      </div>
                      <div className="col-md-3 px-sm-0">
                        <Link to="/rooms" className="booking-button">check<br />availability</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-top-bottom over-hide">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div className="row justify-content-center">
                  <div className="col-10">
                    <div className="subtitle text-center mb-4">hotel LuxuryStay Hospitality</div>
                    <h2 className="text-center">Here is a tribute to good life!</h2>
                    <p className="text-center mt-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="img-wrap">
                  <img src="./src/assets/img/rooms.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section background-grey over-hide">
          <div className="container-fluid px-0">
            <div className="row mx-0">
              <div className="col-xl-6 px-0">
                <div className="img-wrap" id="rev-1">
                  <img src="./src/assets/img/room1.jpg" alt />
                  <div className="text-element-over">private pool suite</div>
                </div>
              </div>
              <div className="col-xl-6 px-0 mt-4 mt-xl-0 align-self-center">
                <div className="row justify-content-center">
                  <div className="col-10 col-xl-8 text-center">
                    <h3 className="text-center">Private pool suite</h3>
                    <p className="text-center mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                    {/* <a className="mt-5 btn btn-primary" href="search.html">check availability</a> */}
                    <Link to="/rooms" className="mt-5 btn btn-primary">
                      Check Availability
                    </Link>

                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-xl-6 px-0 mt-4 mt-xl-0 pb-5 pb-xl-0 align-self-center">
                <div className="row justify-content-center">
                  <div className="col-10 col-xl-8 text-center">
                    <h3 className="text-center">Sea view suite</h3>
                    <p className="text-center mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                    <Link to="/rooms" className="mt-5 btn btn-primary">
                      Check Availability
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 px-0 order-first order-xl-last mt-5 mt-xl-0">
                <div className="img-wrap" id="rev-2">
                  <img src="./src/assets/img/room2.jpg" alt />
                  <div className="text-element-over">sea view suite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section background-dark over-hide">
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
              <Link to="/rooms" className="mt-5 btn btn-primary">
                      Check Availability
                  
                  <div className="img-wrap services-wrap">
                    <img src="./src/assets/img/ser-1.jpg" alt />
                    <div className="services-text-over">spa salon</div>
                  </div>
                  </Link>
              </div>
              <div className="col-sm-6 col-lg-3 pt-4 pt-sm-0">
              <Link to="/rooms" className="mt-5 btn btn-primary">
              Check Availability
                  <div className="img-wrap services-wrap">
                    <img src="./src/assets/img/ser-2.jpg" alt />
                    <div className="services-text-over">restaurant</div>
                  </div>
                  </Link>
              </div>
              <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
              <Link to="/rooms" className="mt-5 btn btn-primary">
              Check Availability
                  <div className="img-wrap services-wrap">
                    <img src="./src/assets/img/ser-3.jpg" alt />
                    <div className="services-text-over">pool</div>
                  </div>
                  </Link>
              </div>
              <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
              <Link to="/rooms" className="mt-5 btn btn-primary">
              Check Availability
                  <div className="img-wrap services-wrap">
                    <img src="./src/assets/img/ser-4.jpg" alt />
                    <div className="services-text-over">activities</div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-top-bottom over-hide">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 align-self-center">
                <div className="subtitle with-line text-center mb-4">elegant suites</div>
                <h3 className="text-center padding-bottom-small">Unpretentious luxury</h3>
              </div>
              <div className="section clearfix" />
              <div className="col-sm-6 col-lg-4">
                <div className="services-box text-center">
                  <img src="./src/assets/img/1.svg" alt />
                  <h5 className="mt-2">smoking free</h5>
                  <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                  <a className="mt-1 btn btn-primary" href="services.html">read more</a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mt-5 mt-sm-0">
                <div className="services-box text-center">
                  <img src="./src/assets/img/2.svg" alt />
                  <h5 className="mt-2">king beds</h5>
                  <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                  <a className="mt-1 btn btn-primary" href="services.html">read more</a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mt-5 mt-lg-0">
                <div className="services-box text-center">
                  <img src="./src/assets/img/3.svg" alt />
                  <h5 className="mt-2">Yacht rental</h5>
                  <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                  <a className="mt-1 btn btn-primary" href="services.html">read more</a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mt-5">
                <div className="services-box text-center">
                  <img src="./src/assets/img/4.svg" alt />
                  <h5 className="mt-2">welcome drink</h5>
                  <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                  <a className="mt-1 btn btn-primary" href="services.html">read more</a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mt-5">
                <div className="services-box text-center">
                  <img src="./src/assets/img/5.svg" alt />
                  <h5 className="mt-2">swimming pool</h5>
                  <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                  <a className="mt-1 btn btn-primary" href="services.html">read more</a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mt-5">
                <div className="services-box text-center">
                  <img src="./src/assets/img/6.svg" alt />
                  <h5 className="mt-2">food included</h5>
                  <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                  <a className="mt-1 btn btn-primary" href="services.html">read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-top-bottom-big over-hide">
          <div className="parallax" style={{ backgroundImage: 'url("./src/assets/img/4.jpg")' }} />
          <div className="section z-bigger">
            <div className="container">
              <div className="row">
                <div className="col-md-12 py-5">
                  <div className="booking-hero-wrap">
                    <div className="row justify-content-center">
                      <div className="col-5 no-mob">
                        <div className="input-daterange input-group" id="flight-datepicker">
                          <div className="row">
                            <div className="col-6">
                              <div className="form-item">
                                <span className="fontawesome-calendar" />
                                <input className="input-sm" type="text" autoComplete="off" id="start-date-1" name="start" placeholder="chech-in date" data-date-format="DD, MM d" />
                                <span className="date-text date-depart" />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-item">
                                <span className="fontawesome-calendar" />
                                <input className="input-sm" type="text" autoComplete="off" id="end-date-1" name="end" placeholder="check-out date" data-date-format="DD, MM d" />
                                <span className="date-text date-return" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 no-mob">
                        <div className="row">
                          <div className="col-6">
                            <select name="adults" className="wide">
                              <option data-display="adults">adults</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select name="children" className="wide">
                              <option data-display="children">children</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-6  col-sm-4 col-lg-2">

                        <Link to="/rooms" className="booking-button">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-top-bottom over-hide background-grey">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 align-self-center">
                <div className="subtitle with-line text-center mb-4">luxury</div>
                <h3 className="text-center padding-bottom-small">Our rooms</h3>
              </div>
              <div className="section clearfix" />
              <div className="col-md-6">
                <div className="room-box background-white">
                  <div className="room-name">suite tanya</div>
                  <div className="room-per">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <img src="./src/assets/img/room3.jpg" alt />
                  <div className="room-box-in">
                    <h5 className>pool suite</h5>
                    <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                    <Link to="/rooms_gallery" className="mt-1 btn btn-primary">Book From 130$</Link>
                    <div className="room-icons mt-4 pt-4">
                      <img src="./src/assets/img/5.svg" alt />
                      <img src="./src/assets/img/2.svg" alt />
                      <img src="./src/assets/img/3.svg" alt />
                      <img src="./src/assets/img/1.svg" alt />
                      <a href="rooms-gallery.html">full info</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="room-box background-white">
                  <div className="room-name">suite helen</div>
                  <div className="room-per">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <img src="./src/assets/img/room4.jpg" alt />
                  <div className="room-box-in">
                    <h5 className>small room</h5>
                    <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                    <Link to="/rooms_gallery" className="mt-1 btn btn-primary">Book From 130$</Link>
                    <div className="room-icons mt-4 pt-4">
                      <img src="./src/assets/img/4.svg" alt />
                      <img src="./src/assets/img/2.svg" alt />
                      <img src="./src/assets/img/6.svg" alt />
                      <img src="./src/assets/img/3.svg" alt />
                      <a href="rooms-gallery.html">full info</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="room-box background-white">
                  <div className="room-name">suite andrea</div>
                  <div className="room-per">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <img src="./src/assets/img/room5.jpg" alt />
                  <div className="room-box-in">
                    <h5 className>Apartment</h5>
                    <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                    <Link to="/rooms_gallery" className="mt-1 btn btn-primary">Book From 130$</Link>
                    <div className="room-icons mt-4 pt-4">
                      <img src="./src/assets/img/5.svg" alt />
                      <img src="./src/assets/img/2.svg" alt />
                      <img src="./src/assets/img/3.svg" alt />
                      <img src="./src/assets/img/6.svg" alt />
                      <a href="rooms-gallery.html">full info</a>
                      <Link to="/gallery">
                      full info
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="room-box background-white">
                  <div className="room-name">suite diana</div>
                  <div className="room-per">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <img src="./src/assets/img/room6.jpg" alt />
                  <div className="room-box-in">
                    <h5 className>big Apartment</h5>
                    <p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                    <Link to="/rooms_gallery" className="mt-1 btn btn-primary">Book From 130$</Link>
                    <div className="room-icons mt-4 pt-4">
                      <img src="./src/assets/img/5.svg" alt />
                      <img src="./src/assets/img/2.svg" alt />
                      <img src="./src/assets/img/3.svg" alt />
                      <img src="./src/assets/img/6.svg" alt />
                      <a href="rooms-gallery.html">full info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-top-bottom-big over-hide">
          <div className="parallax" style={{ backgroundImage: 'url("./src/assets/img/5.jpg")' }} />
          <div className="section z-bigger">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div id="owl-sep-1" className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="quote-sep">
                        <h4>&quot;Chilling out on the bed in your hotel room watching
                          television, while wearing your own pajamas, is sometimes the
                          best part of a vacation.&quot;</h4>
                        <h6>Jason Salvatore</h6>
                      </div>
                    </div>
                    <div className="item">
                      <div className="quote-sep">
                        <h4>&quot;Every good day starts off with a cappuccino,
                          and there&apos;s no place better to enjoy some frothy caffeine
                          than at the LuxuryStay Hospitality Hotel.&quot;</h4>
                        <h6>Terry Mitchell</h6>
                      </div>
                    </div>
                    <div className="item">
                      <div className="quote-sep">
                        <h4>&quot;I still enjoy traveling a lot. I mean, it amazes me that
                          I still get excited in hotel rooms just to see what kind of
                          shampoo they&apos;ve left me.&quot;</h4>
                        <h6>Michael Brighton</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-top-bottom-small background-dark-2 over-hide">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h5 className="color-grey">A new dimension of luxury.</h5>
                <p className="color-white mt-3 mb-3"><em>our presentation, 0:48 min</em></p>
                <a href="https://vimeo.com/54851233" className="video-button" data-fancybox><i className="fa fa-play" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="section padding-top z-bigger">
          <div className="container">
            <div className="row justify-content-center padding-bottom-smaller">
              <div className="col-md-8">
                <div className="subtitle with-line text-center mb-4">get in touch</div>
                <h3 className="text-center padding-bottom-small">drop us a line</h3>
              </div>
              <div className="section clearfix" />
              <div className="col-md-6 col-lg-4">
                <div className="address">
                  <div className="address-in text-left">
                    <p className="color-black">Address:</p>
                  </div>
                  <div className="address-in text-right">
                    <p>Avenue Str. 328</p>
                  </div>
                </div>
                <div className="address">
                  <div className="address-in text-left">
                    <p className="color-black">City:</p>
                  </div>
                  <div className="address-in text-right">
                    <p>Thessaloniki</p>
                  </div>
                </div>
                <div className="address">
                  <div className="address-in text-left">
                    <p className="color-black">Check-In:</p>
                  </div>
                  <div className="address-in text-right">
                    <p>14:00 pm</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="address">
                  <div className="address-in text-left">
                    <p className="color-black">Phone:</p>
                  </div>
                  <div className="address-in text-right">
                    <p>+21 60 374 7537</p>
                  </div>
                </div>
                <div className="address">
                  <div className="address-in text-left">
                    <p className="color-black">Email:</p>
                  </div>
                  <div className="address-in text-right">
                    <p>info@hotel.com</p>
                  </div>
                </div>
                <div className="address">
                  <div className="address-in text-left">
                    <p className="color-black">Check-Out:</p>
                  </div>
                  <div className="address-in text-right">
                    <p>11:00 am</p>
                  </div>
                </div>
              </div>
              <div className="section clearfix" />
              <div className="col-md-8 text-center mt-5" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                <p className="mb-0"><em>available at: 8am - 10pm</em></p>
                <h2 className="text-opacity">+21 60 374 7537</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="subscribe-home">
                  <input type="text" placeholder="your email here" />
                  <button data-lang="en">subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section background-dark over-hide">
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <a href="services.html">
                  <div className="img-wrap services-wrap">
                    <img src="./src/assets/img/ser-1.jpg" alt />
                    <div className="services-text-over">spa salon</div>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 pt-4 pt-sm-0">
                <a href="services.html">
                  <div className="img-wrap services-wrap">
                    <img src="./src/assets/img/ser-2.jpg" alt />
                    <div className="services-text-over">restaurant</div>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
                <a href="services.html">
                  <div className="img-wrap services-wrap">
                    <img src="./src/assets/img/ser-3.jpg" alt />
                    <div className="services-text-over">pool</div>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
                <a href="services.html">
                  <div className="img-wrap services-wrap">
                    <img src="./src/assets/img/ser-4.jpg" alt />
                    <div className="services-text-over">activities</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home