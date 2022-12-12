import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Tab1.css";
import { IonContent, IonPage } from "@ionic/react";
import LogInPage from "./LogInPage";


const Tab1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonDefaultPrimaryClick = useCallback(() => {
    navigate("/signup1page");
  }, [navigate]);

  const onButtonDefaultPrimary1Click = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  const onAboutUsButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutUsButton']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
    <div className="landingpage-div">
      <div className="contactussection-div">
        <img className="path-1517-icon" alt="" src="./assets/path-1517.svg" />
        <img className="path-761-icon" alt="" src="./assets/path-761.svg" />
        <form className="contactform">
          <Form.Group className="fullname-formgroup">
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          <Form.Group className="message-formgroup">
            <Form.Control as="textarea" placeholder="Message..." />
          </Form.Group>
          <Form.Group className="email-formgroup">
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <button className="button">
            <img className="group-icon" alt="" src="./assets/group-605.svg" />
            <b className="submit">Submit</b>
          </button>
          <div className="say-hi-div">Say Hi,</div>
        </form>
        <b className="contact-us-b">Contact Us</b>
        <div className="need-any-help-give-us-a-call">
          <p className="need-any-help">{`Need any help? `}</p>
          <p className="need-any-help">
            Give us a call or reach out to us on social media
          </p>
        </div>
        <div className="address-grp-div">
          <div className="address-nairobi-kenya-div">
            <p className="need-any-help">Address</p>
            <p className="need-any-help">Nairobi, Kenya</p>
          </div>
          <img className="addressicon" alt="" src="./assets/addressicon.svg" />
        </div>
        <div className="callgrp-div">
          <div className="address-nairobi-kenya-div">
            <p className="need-any-help">Call</p>
            <p className="need-any-help">Nairobi, Kenya</p>
          </div>
          <img className="phoneicon" alt="" src="./assets/phoneicon.svg" />
        </div>
        <div className="emailgrp-div">
          <div className="address-nairobi-kenya-div">
            <p className="need-any-help">Email</p>
            <p className="need-any-help">Nairobi, Kenya</p>
          </div>
          <img className="emailicon" alt="" src="./assets/emailicon.svg" />
        </div>
      </div>
      <div className="newslettersection-div">
        <b className="subscribe-to-our-newsletter">
          Subscribe to our newsletter
        </b>
        <div className="sign-up-for-our-newsletter-to">
          <p className="need-any-help">{`Sign up for our newsletter to keep updated with the latest `}</p>
          <p className="need-any-help">{`design and development trends. We promise we don’t spam. `}</p>
        </div>
        <div className="inputgrouprightbutton-addon-div">
          <button className="inputgroupbaseoutlineright-button">
            <div className="inputgroupbaseoutlineleft-div" />
            <div className="email-div2">Email</div>
          </button>
          <Form.Group className="inputgroupbasetextleftmedi-formgroup">
            <Form.Control type="text" placeholder="input Email" />
          </Form.Group>
        </div>
      </div>
      <div className="aboutussection-div">
        <b className="about-us">About US</b>
        <div className="learn-how-we-helped-our-severa">
          <p className="need-any-help">
            Learn how we helped our several clients grow their
          </p>
          <p className="need-any-help">{`businesses online. `}</p>
        </div>
        <div className="features-1-make-a-receive-voi">
          <p className="need-any-help">
            <span className="features-span">Features</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">{`1. Make a receive VOIP and Normal calls anywhere in `}</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">the world</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">&nbsp;</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">{`2. Switchboard so Users that can receive and track `}</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">
              issues using a case management system
            </span>
          </p>
          <p className="need-any-help">
            <span className="features-span">&nbsp;</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">
              3. User can retrieve information from a database
            </span>
          </p>
          <p className="need-any-help">
            <span className="features-span"> without talking to anyone</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">&nbsp;</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">{`4. Users can do surveys or polls just like on Britain's `}</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">got talent</span>
          </p>
          <p className="need-any-help">
            <span className="features-span">&nbsp;</span>
          </p>
          <b />
          <span />
        </div>
        <img className="callcenter-icon" alt="" src="./assets/callcenter@2x.png" />
        
      </div>
      <div className="ourservicessection-div">
        <img
          className="services-background-icon3"
          alt=""
          src="./assets/services-background.svg"
        />
        <div className="servicesgrid-div">
          <div className="card1-div">
            <div className="voip-and-normal-calls">VOIP and Normal calls</div>
            <div className="make-a-receive-voip-and-norma">
              <p className="need-any-help">{`Make a receive VOIP and `}</p>
              <p className="need-any-help">{`Normal calls anywhere in `}</p>
              <p className="need-any-help">the world</p>
            </div>
            <img className="voipgirl-icon" alt="" src="./assets/voipgirl@2x.png" />
          </div>
          <div className="card2-div">
            <div className="voip-and-normal-calls">VOIP and Normal calls</div>
            <div className="make-a-receive-voip-and-norma">
              <p className="need-any-help">{`Make a receive VOIP and `}</p>
              <p className="need-any-help">{`Normal calls anywhere in `}</p>
              <p className="need-any-help">the world</p>
            </div>
            <img className="voipgirl-icon1" alt="" src="./assets/voipgirl@2x.png" />
          </div>
          <div className="card3-div">
            <div className="voip-and-normal-calls">VOIP and Normal calls</div>
            <img className="voipgirl-icon2" alt="" src="./assets/voipgirl@2x.png" />
            <div className="make-a-receive-voip-and-norma">
              <p className="need-any-help">{`Make a receive VOIP and `}</p>
              <p className="need-any-help">{`Normal calls anywhere in `}</p>
              <p className="need-any-help">the world</p>
            </div>
          </div>
        </div>
        <b className="our-services-b">Our Services</b>
        <div className="learn-how-we-helped-our-severa1">
          <p className="need-any-help">
            Learn how we helped our several clients grow in online
          </p>
          <p className="need-any-help">
            business. It will give you an idea of our capabilities.
          </p>
        </div>
      </div>
      <div className="headersection-div">
        <div className="headerwordings-div">
        <Link to="/register"><Button
            className="buttondefaultprimary2"
            variant="primary"
            onClick={onButtonDefaultPrimaryClick}
          >
            GET STARTED
          </Button>
          </Link>
          <div className="a-full-range-of-communication">
            <p className="need-any-help">{`a full range of communication tools for creating `}</p>
            <p className="need-any-help">
              the greatest possible business connections.
            </p>
            <p className="need-any-help">No technical skills needed.</p>
          </div>
          <div className="building-strong-relationships">
            <p className="need-any-help">
              <span className="building-span">Building</span>
              <span>{` Strong `}</span>
            </p>
            <p className="need-any-help">
              <span>{`Relationships `}</span>
            </p>
            <p className="need-any-help">
              <span>with Clients</span>
            </p>
          </div>
        </div>
        <img className="callcenter-icon1" alt="" src="./assets/callcenter1@2x.png" />
      </div>
      <div className="titlesection-div3">
        <Link to="/login">
        <Button
          className="buttondefaultprimary3"
          variant="primary"
          onClick={onButtonDefaultPrimary1Click}
        >
          Log In
        </Button>
        </Link>
        
        <button
          className="about-us-button"
          data-scroll-to="aboutUsButton"
          onClick={onAboutUsButtonClick}
        >
          About Us
        </button>
        <Link to="/"><b className="asterisk-b3">ASTERISK</b></Link>
        <div className="pricing-div3">Pricing</div>
        <div className="contact-us-div3">Contact Us</div>
      </div>
      <div className="footersection-div">
        <img className="group-icon" alt="" src="./assets/background.svg" />
        <b className="asterisk-b4">ASTERISK</b>
        <div className="designed-by-leroy">©designed by Leroy</div>
        <div className="footer-nav-div">
          <div className="careers-div">Careers</div>
          <div className="services-div">Services</div>
          <div className="portfolio-div">Portfolio</div>
          <div className="quote-estimate-div">Quote Estimate</div>
        </div>
      </div>
    </div>
    </IonContent>
    </IonPage>
  );
};

export default Tab1;
