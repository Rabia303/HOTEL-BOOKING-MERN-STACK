import React from "react"
const Footer = () => {
  return (
    	<>
	<div className="section padding-top-bottom-small background-black over-hide footer">
    <div className="container">
        <div className="row">
            <div className="col-md-3 text-center text-md-left">
                <img src="./src/assets/img/logo.png" alt=""/>
                <p className="color-grey mt-4">Avenue Street 3284<br/>Thessaloniki</p>
            </div>
            <div className="col-md-4 text-center text-md-left">
                <h6 className="color-white mb-3">information</h6>
                <a href="tandc.html">terms &amp; conditions</a>
                <a href="services.html">services</a>
                <a href="restaurant.html">restaurant</a>
                <a href="testimonials.html">testimonials</a>
                <a href="gallery.html">gallery &amp; images</a>
            </div>
            <div className="col-md-5 mt-4 mt-md-0 text-center text-md-left logos-footer">
                <h6 className="color-white mb-3">about us</h6>
                <p className="color-grey mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                <img src="./src/assets/img/logos/1.png" alt=""/>
                <img src="./src/assets/img/logos/2.png" alt=""/>
                <img src="./src/assets/img/logos/3.png" alt=""/>
            </div>
        </div>	
    </div>	
</div>

<div className="section py-4 background-dark over-hide footer-bottom">
    <div className="container">
        <div className="row">
            <div className="col-md-6 text-center text-md-left mb-2 mb-md-0">
                <p>2019 © LuxuryStay Hospitality. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-right">
                <a href="#" className="social-footer-bottom">facebook</a>
                <a href="#" className="social-footer-bottom">twitter</a>
                <a href="#" className="social-footer-bottom">instagram</a>
            </div>
        </div>	
    </div>		
</div>


<div className="scroll-to-top"></div>
</>
  )
}

export default Footer