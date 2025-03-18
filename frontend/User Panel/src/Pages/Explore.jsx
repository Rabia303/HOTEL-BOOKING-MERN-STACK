import React from "react"
import { Link } from "react-router-dom"
const Explore = () => {
  return (
    <>
<div>
  <div className="section big-55-height over-hide">
    <div id="poster_background-explore" />
    <div id="video-wrap" className="parallax-top">
      <video id="video_background" preload="auto" autoPlay loop="loop" muted="muted" poster="img/trans.png"> 
        <source src="./src/assets/video/video-explore.mp4" type="video/mp4" /> 
      </video>
    </div>
    <div className="dark-over-pages" />
    <div className="hero-center-section pages">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 parallax-fade-top">
            <div className="hero-text">Explore Thessaloniki</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section padding-top-bottom over-hide">
    <div className="section z-bigger">		
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
          </div>
        </div>
      </div>					
    </div>
  </div>
  <div className="section over-hide">
    <div className="img-wrap">	
      <img src="./src/assets/img/explore1.jpg" alt />					
    </div>
  </div>
  <div className="section padding-top-bottom over-hide">
    <div className="section z-bigger">		
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
        </div>
      </div>					
    </div>
  </div>
  <div className="section padding-bottom over-hide">
    <div className="section z-bigger">		
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-wrap">	
              <img src="./src/assets/img/explore2.jpg" alt />					
            </div>
            <p className="mb-0 mt-3 color-black text-center"><strong><em>night life</em></strong></p>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="img-wrap">	
              <img src="./src/assets/img/explore4.jpg" alt />					
            </div>
            <p className="mb-0 mt-3 color-black text-center"><strong><em>night life</em></strong></p>
          </div>
          <div className="col-12 mt-4">
            <div className="img-wrap">	
              <img src="./src/assets/img/explore3.jpg" alt />					
            </div>
            <p className="mb-0 mt-3 color-black text-center"><strong><em>city view</em></strong></p>
          </div>
        </div>
      </div>					
    </div>
  </div>
  <div className="section padding-bottom over-hide">
    <div className="section z-bigger">		
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
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
        <div className="col-lg-4" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
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
              <Link to="/rooms_gallery" className="mt-1 btn btn-primary">Book From 80$</Link>
              <div className="room-icons mt-4 pt-4">
                <img src="./src/assets/img/5.svg" alt />
                <img src="./src/assets/img/2.svg" alt />
                <img src="./src/assets/img/3.svg" alt />
                <Link to='/rooms_gallery'>full info</Link>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        <div className="col-lg-4 mt-4 mt-lg-0" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.4s">
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
              <Link to="/rooms_gallery" className="mt-1 btn btn-primary">Book From 80$</Link>
              <div className="room-icons mt-4 pt-4">
                <img src="./src/assets/img/4.svg" alt />
                <img src="./src/assets/img/2.svg" alt />
                <img src="./src/assets/img/6.svg" alt />
                <Link to='/rooms_gallery'>full info</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.6s">
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
              <Link to="/rooms_gallery" className="mt-1 btn btn-primary">Book From 110$</Link>
              <div className="room-icons mt-4 pt-4">
                <img src="./src/assets/img/5.svg" alt />
                <img src="./src/assets/img/2.svg" alt />
                <img src="./src/assets/img/3.svg" alt />
                <Link to='/rooms_gallery'>full info</Link>
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
        <Link to='/rooms_gallery'>full info
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-1.jpg" alt />
              <div className="services-text-over">spa salon</div>
            </div>
            </Link>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-sm-0">
        <Link to='/rooms_gallery'>full info
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-2.jpg" alt />
              <div className="services-text-over">restaurant</div>
            </div>
            </Link>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
        <Link to='/rooms_gallery'>full info
            <div className="img-wrap services-wrap">
              <img src="./src/assets/img/ser-3.jpg" alt />
              <div className="services-text-over">pool</div>
            </div>
            </Link>
        </div>
        <div className="col-sm-6 col-lg-3 pt-4 pt-lg-0">
        <Link to='/rooms_gallery'>full info
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
export default Explore
