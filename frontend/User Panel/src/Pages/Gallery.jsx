import React from "react"
import { Link } from "react-router-dom"
const Gallery = () => {
  return (
    <>
<div>
  <div className="section big-55-height over-hide z-bigger">
    <div className="parallax parallax-top" style={{backgroundImage: 'url("./src/assets/img/rooms.jpg")'}} />
    <div className="dark-over-pages" />
    <div className="hero-center-section pages">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 parallax-fade-top">
            <div className="hero-text">Gallery</div>
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
          <div className="subtitle with-line text-center mb-4">gallery</div>
          <h3 className="text-center padding-bottom-small">our rooms</h3>
        </div>
        <div className="section clearfix" />
        <div className="col-md-4">
          <a href="./src/assets/img/gallery/1.jpg" data-fancybox="gallery">							 
            <div className="img-wrap gallery-small">
              <img src="./src/assets/img/gallery/1-s.jpg" alt />
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-4 mt-md-0">
          <a href="./src/assets/img/gallery/2.jpg" data-fancybox="gallery">							 
            <div className="img-wrap gallery-small">
              <img src="./src/assets/img/gallery/2-s.jpg" alt />
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-4 mt-md-0">
          <a href="./src/assets/img/gallery/3.jpg" data-fancybox="gallery">							 
            <div className="img-wrap gallery-small">
              <img src="./src/assets/img/gallery/3-s.jpg" alt />
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-4">
          <a href="./src/assets/img/gallery/4.jpg" data-fancybox="gallery">							 
            <div className="img-wrap gallery-small">
              <img src="./src/assets/img/gallery/4-s.jpg" alt />
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-4">
          <a href="./src/assets/img/gallery/5.jpg" data-fancybox="gallery">							 
            <div className="img-wrap gallery-small">
              <img src="./src/assets/img/gallery/5-s.jpg" alt />
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-4">
          <a href="./src/assets/img/gallery/6.jpg" data-fancybox="gallery">							 
            <div className="img-wrap gallery-small">
              <img src="./src/assets/img/gallery/6-s.jpg" alt />
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-4">
          <a href="./src/assets/img/gallery/7.jpg" data-fancybox="gallery">							 
            <div className="img-wrap gallery-small">
              <img src="./src/assets/img/gallery/7-s.jpg" alt />
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-4">
          <a href="./src/assets/img/gallery/8.jpg" data-fancybox="gallery">							 
            <div className="img-wrap gallery-small">
              <img src="./src/assets/img/gallery/8-s.jpg" alt />
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-4">
          <a href="./src/assets/img/gallery/9.jpg" data-fancybox="gallery">							 
            <div className="img-wrap gallery-small">
              <img src="./src/assets/img/gallery/9-s.jpg" alt />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="section padding-top-bottom-big over-hide">
    <div className="parallax" style={{backgroundImage: 'url(".src/img/5.jpg")',backgroundColor:'gray'}} />
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
                  <h4>&quot;Every good day starts off with a cappuccino, and 
                    there&apos;s no place better to enjoy some frothy caffeine than 
                    at the LuxuryStay Hospitality Hotel.&quot;</h4>
                  <h6>Terry Mitchell</h6>	
                </div>									
              </div>											
              <div className="item">					
                <div className="quote-sep">
                  <h4>&quot;I still enjoy traveling a lot. I mean, it amazes me that I still 
                    get excited in hotel rooms just to see what kind of shampoo 
                    they&apos;ve left me.&quot;</h4>
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
        <Link to='/Services'>Services
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-1.jpg" alt />
              <div className="services-text-over">spa salon</div>
            </div>
            </Link>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-sm-0">
        <Link to='/Services'>Services
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-2.jpg" alt />
              <div className="services-text-over">restaurant</div>
            </div>
            </Link>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
        <Link to='/Services'>Services
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-3.jpg" alt />
              <div className="services-text-over">pool</div>
            </div>
            </Link>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
        <Link to='/Services'>Services
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-4.jpg" alt />
              <div className="services-text-over">activities</div>
            </div>
            </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Gallery