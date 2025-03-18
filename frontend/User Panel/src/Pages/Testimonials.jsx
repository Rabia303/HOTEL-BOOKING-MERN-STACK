import React from "react"
const Testimonials = () => {
  return (
    <>
<div>
  <div className="section big-55-height over-hide z-bigger">
    <div className="parallax parallax-top" style={{backgroundImage: 'url("./src/assets/img/2.jpg")'}} />
    <div className="dark-over-pages" />
    <div className="hero-center-section pages">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 parallax-fade-top">
            <div className="hero-text">Testimonials</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section padding-top-bottom-smaller background-dark-2 over-hide">		
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
  <div className="section padding-top-bottom over-hide">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 align-self-center">
          <div className="subtitle with-line text-center mb-4">people love us</div>
          <h3 className="text-center padding-bottom-small">what people have to say</h3>
        </div>
        <div className="section clearfix" />
        <div className="col-md-4">
          <div className="services-box restaurant testimonials text-center">
            <img src="./src/assets/img/t1.jpg" alt />
            <h5 className="mt-3">Terry Johnson</h5>
            <p className="mt-3"><em>&quot;Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam.&quot;</em></p>
            <div className="img-down mt-4">
              <img src="./src/assets/img/logos/1.png" alt />
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5 mt-md-0">
          <div className="services-box restaurant testimonials text-center">
            <img src="./src/assets/img/t2.jpg" alt />
            <h5 className="mt-3">Maria Kulis</h5>
            <p className="mt-3"><em>&quot;Sed ut perspiciatis unde omnis
               iste natus error sit, totam rem aperiam.&quot;</em></p>
            <div className="img-down mt-4">
              <img src="./src/assets/img/logos/2.png" alt />
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5 mt-md-0">
          <div className="services-box restaurant testimonials text-center">
            <img src="./src/assets/img/t3.jpg" alt />
            <h5 className="mt-3">Alex Fleet</h5>
            <p className="mt-3"><em>&quot;Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam.&quot;</em></p>
            <div className="img-down mt-4">
              <img src="./src/assets/img/logos/4.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section padding-top-bottom-big over-hide">
    <div className="parallax" style={{backgroundImage: 'url("./src/assets/img/5.jpg")'}} />
    <div className="section z-bigger">		
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div id="owl-sep-1" className="owl-carousel owl-theme">								 
              <div className="item">						
                <div className="quote-sep">	
                  <h4>&quot;Chilling out on the bed in your hotel room watching television, while wearing your own pajamas, is sometimes the best part of a vacation.&quot;</h4>
                  <h6>Jason Salvatore</h6>	
                </div>											
              </div>											
              <div className="item">					
                <div className="quote-sep">
                  <h4>&quot;Every good day starts off with a cappuccino, and there&quot;s no place better to enjoy some frothy caffeine than at the LuxuryStay Hospitality Hotel.&quot;</h4>
                  <h6>Terry Mitchell</h6>	
                </div>									
              </div>											
              <div className="item">					
                <div className="quote-sep">
                  <h4>&quot;I still enjoy traveling a lot. I mean, it
                     amazes me that I still get excited in hotel rooms
                      just to see what kind of shampoo they&quot;ve left me.&quot;</h4>
                  <h6>Michael Brighton</h6>
                </div>										
              </div>								 
            </div>	
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
          <a href="/services.html">
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

export default Testimonials