import { useState } from "react";
import axios from 'axios'
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cont, setContent] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const userData = {
      name:name,
      email:email,
      content:cont
    }

    const response = await axios.post('http://localhost:3000/usercontact',userData);
    alert('User Added')
    console.log();
  }

  return (
    <>
      <div>
        <div className="section big-55-height over-hide z-bigger">
          <div className="parallax parallax-top" style={{ backgroundImage: 'url("./src/assets/img/gallery/10.jpg")' }} />
          <div className="dark-over-pages" />
          <div className="hero-center-section pages">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 parallax-fade-top">
                  <div className="hero-text">Get in Touch</div>
                </div>
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

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 ajax-form">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name: *"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-4 mt-md-0 ajax-form">
                    <input
                      name="email"
                      type="email"
                      placeholder="E-Mail:"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="section clearfix" />
                <div className="col-md-12 mt-4 ajax-form">
                  <textarea
                    name="message"
                    placeholder="Tell Us Everything"
                    value={cont}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="section clearfix" />
                <div className="col-md-12 mt-3 ajax-checkbox">
                  <label className="label--checkbox">
                    <input type="checkbox" className="checkbox" required />
                    Collect my details through this form
                  </label>
                </div>
                <div className="section clearfix" />
                <div className="col-md-12 mt-3 ajax-form text-center">
                  <button type="submit" className="send_message" data-lang="en">
                    <span value={"Insert Data"}>Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
