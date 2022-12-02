import { IonContent, IonPage } from "@ionic/react";
import { FunctionComponent, useCallback } from "react";
import "./Tab2.css";

const AgencyLandingPage: FunctionComponent = () => {
  const onPricingTextClick = useCallback(() => {
    // Please sync "Portfolio Page" to the project
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
    <div className="agency-landing-page-div">
      <div className="footer-div">
        <img className="background-icon" alt="" src="../background.svg" />
        <div className="contact-info-div">
          <div className="hartford-way-vlg-mount-pleasa">
            <p className="hartford-way-vlg">
              3556 Hartford Way Vlg, Mount Pleasant,SC,
            </p>
            <p className="hartford-way-vlg">29466, Australia.</p>
          </div>
          <div className="div">
            <p className="hartford-way-vlg">734-697-2907</p>
            <p className="hartford-way-vlg">843-971-1906</p>
          </div>
          <div className="helloagencycom-div">hello@agency.com</div>
        </div>
        <div className="newsletter-subscribe-div">
          <div className="group-div">
            <div className="subscribe-to-our-newsletter">
              Subscribe to our newsletter
            </div>
          </div>
          <div className="group-div1">
            <div className="email-div">Email</div>
          </div>
          <div className="group-div2">
            <img className="background-icon" alt="" src="../group-603.svg" />
            <b className="join-b">Join</b>
          </div>
        </div>
        <div className="social-icons-div">
          <div className="twitter-div">twitter</div>
          <div className="instagram-div">instagram</div>
          <div className="facebook-div">facebook</div>
        </div>
        <div className="agency-logo-div">
          <b className="agency-b">Agency</b>
          <div className="group-div3">
            <div className="rectangle-div" />
          </div>
        </div>
        <div className="footer-nav-div">
          <div className="careers-div">Careers</div>
          <div className="services-div">Services</div>
          <div className="portfolio-div">Portfolio</div>
          <div className="quote-estimate-div">Quote Estimate</div>
        </div>
        <div className="designed-by-we3solutionsca">
          © 2020 | designed by we3solutions.ca
        </div>
      </div>
      <div className="contact-div">
        <div className="email-div1">
          <img className="mail-24px-icon" alt="" src="../mail24px.svg" />
          <div className="email-us-div">Email Us</div>
          <div className="helloagencycom-div1">hello@agency.com</div>
        </div>
        <div className="call-div">
          <div className="call-for-queries">Call for queries</div>
          <div className="div1">
            <p className="hartford-way-vlg">734-697-2907</p>
            <p className="hartford-way-vlg">843-971-1906</p>
          </div>
          <img
            className="smartphone-call-icon"
            alt=""
            src="../smartphonecall.svg"
          />
        </div>
        <div className="address-div">
          <div className="address-div1">Address</div>
          <div className="hartford-way-vlg-mount-pleasa1">
            <p className="hartford-way-vlg">
              3556 Hartford Way Vlg, Mount Pleasant, SC,
            </p>
            <p className="hartford-way-vlg">29466, Australia.</p>
          </div>
          <img
            className="location-on-24px-icon"
            alt=""
            src="../location-on24px.svg"
          />
        </div>
        <div className="form-div">
          <img
            className="contact-form-background"
            alt=""
            src="../contact-form-background.svg"
          />
          <div className="contact-form-div">
            <div className="say-hi-div">Say Hi</div>
            <button className="button">
              <img className="background-icon" alt="" src="../group-605.svg" />
              <b className="submit">Submit</b>
            </button>
            <input
              className="message-text-field"
              type="text"
              placeholder="Message"
              maxLength={1000}
              minLength={10}
             
            />
            <input
              className="email-text-field"
              type="email"
              placeholder="Email Address"
            />
            <div className="name-text-field">
              <input
                className="group-input"
                type="text"
                placeholder="Full Name"
              />
              <div className="full-name-div">Full Name</div>
            </div>
          </div>
        </div>
        <div className="section-heading-div">
          <b className="contact-us-b">Contact Us</b>
          <div className="have-a-project-we-can-help-wit">
            Have a project we can help with? Give us a call or reach out to us
            on social media
          </div>
        </div>
      </div>
      <div className="newsletter-div">
        <div className="background-div" />
        <div className="content-div">
          <div className="heading-and-text">
            <div className="service-card-div">
              <b className="subscribe-to-our-newsletter1">
                Subscribe To Our Newsletter
              </b>
              <div className="sign-up-for-our-newsletter-to">{`Sign up for our newsletter to keep updated with the latest design and development trends. We promise we don’t spam. `}</div>
            </div>
          </div>
          <div className="cta-div">
            <div className="text-field-div">
              <div className="service-card-div">
                <div className="group-div5" />
              </div>
              <div className="email-div2">Email</div>
            </div>
            <button className="button1">
              <img className="group-icon2" alt="" src="../group-6051.svg" />
              <b className="join-b1">JOIN</b>
            </button>
          </div>
        </div>
      </div>
      <div className="about-us-div">
        <div className="about-us-text">
          <div className="nunc-eu-augue-at-nunc-consecte">
            Nunc eu augue at nunc consectetur venenatis sit amet sodales metus.
            Sed at gravida nisi, mattis lacinia ipsum. Pellentesque suscipit
            odio quis ligula maximus aliquet. Integer cursus ipsum et posuere
            ornare.
          </div>
          <div className="sed-ut-perspiciatis-unde-omnis">
            <p className="hartford-way-vlg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur? At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga.
              Et harum quidem rerum facilis est et expedita distinctio.
            </p>
            <p className="hartford-way-vlg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur? At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium
            </p>
          </div>
          <div className="reasons-for-choosing-us">Reasons for choosing us</div>
        </div>
        <img
          className="about-us-illustration"
          alt=""
          src="../about-us-illustration.svg"
        />
        <div className="section-heading-div2">
          <b className="about-us">ABout US</b>
          <div className="learn-how-we-helped-our-severa">
            <p className="hartford-way-vlg">
              Learn how we helped our several clients grow their
            </p>
            <p className="hartford-way-vlg">{`businesses online. `}</p>
          </div>
        </div>
      </div>
      <div className="our-services-div">
        <img
          className="background-icon"
          alt=""
          src="../services-background.svg"
        />
        <div className="section-heading-div3">
          <b className="our-services-b">Our Services</b>
          <div className="learn-how-we-helped-our-severa">
            <p className="hartford-way-vlg">
              Learn how we helped our several clients grow in online
            </p>
            <p className="hartford-way-vlg">
              business. It will give you an idea of our capabilities.
            </p>
          </div>
        </div>
        <div className="services-grid-div">
          <div className="div2">
            <div className="service-card-div">
              <div className="service-card-group">
                <div className="voip-and-normal-calls">
                  VOIP and Normal calls
                </div>
                <div className="make-a-receive-voip-and-normal">
                  Make a receive VOIP and Normal calls anywhere in the world
                </div>
              </div>
              <img
                className="service-card-image"
                alt=""
                src="../service-card-image.svg"
              />
            </div>
          </div>
          <div className="div3">
            <div className="service-card-div">
              <div className="service-card-group">
                <div className="switchboard-div">Switchboard</div>
                <div className="switchboard-so-users-that-can">
                  Switchboard so Users that can receive and track issues using a
                  case management system
                </div>
                <img
                  className="icon-awesome-facebook"
                  alt=""
                  src="../icon-awesomefacebook.svg"
                />
                <img
                  className="icon-awesome-twitter"
                  alt=""
                  src="../icon-awesometwitter.svg"
                />
                <img
                  className="icon-awesome-instagram"
                  alt=""
                  src="../icon-awesomeinstagram.svg"
                />
                <img
                  className="icon-awesome-linkedin-in"
                  alt=""
                  src="../icon-awesomelinkedinin.svg"
                />
              </div>
              <img className="group-icon3" alt="" src="../group-645.svg" />
            </div>
          </div>
          <div className="div4">
            <div className="service-card-div">
              <div className="service-card-group">
                <div className="database-div">database</div>
                <div className="switchboard-so-users-that-can">
                  User can retrieve information from a database without talking
                  to anyone
                </div>
                <img
                  className="icon-awesome-facebook"
                  alt=""
                  src="../icon-awesomefacebook.svg"
                />
                <img
                  className="icon-awesome-twitter"
                  alt=""
                  src="../icon-awesometwitter.svg"
                />
                <img
                  className="icon-awesome-instagram"
                  alt=""
                  src="../icon-awesomeinstagram.svg"
                />
                <img
                  className="icon-awesome-linkedin-in1"
                  alt=""
                  src="../icon-awesomelinkedinin.svg"
                />
              </div>
              <img className="group-icon4" alt="" src="../group-629.svg" />
            </div>
          </div>
          <div className="div5">
            <div className="service-card-div">
              <div className="service-card-group">
                <div className="surveys-div">surveys</div>
                <div className="switchboard-so-users-that-can">
                  Users can do surveys or polls just like on Britain's got
                  talent
                </div>
                <img
                  className="icon-awesome-facebook"
                  alt=""
                  src="../icon-awesomefacebook.svg"
                />
                <img
                  className="icon-awesome-twitter"
                  alt=""
                  src="../icon-awesometwitter.svg"
                />
                <img
                  className="icon-awesome-instagram"
                  alt=""
                  src="../icon-awesomeinstagram.svg"
                />
                <img
                  className="icon-awesome-linkedin-in1"
                  alt=""
                  src="../icon-awesomelinkedinin.svg"
                />
              </div>
              <img className="group-icon5" alt="" src="../group-637.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-div">
        <div className="building-strong-relationships">
          <span className="building-strong-relationships1">
            Building Strong Relationships with Cients
          </span>
          <b className="b" />
          <span />
        </div>
        <div className="a-full-range-of-communication">
          a full range of communication tools for creating the greatest possible
          business connections.. No technical skills needed.
        </div>
        <img className="illustration-icon" alt="" src="../illustration.svg" />
        <button className="button">
          <img
            className="background-icon"
            alt=""
            src="../button-background.svg"
          />
          <b className="get-started-b">GET STARTED</b>
        </button>
      </div>
      <div className="header-div">
        <div className="rectangle-div1" />
        <div className="group-div9">
          <div className="logo-div">
            <b className="asterisk-b">Asterisk</b>
            <div className="group-div10">
              <div className="rectangle-div2" />
            </div>
          </div>
          <div className="header-menu-div">
            <div className="pricing-div" onClick={onPricingTextClick}>
              Pricing
            </div>
            <div className="contact-div1">Contact</div>
            <a className="about-us1">About Us</a>
          </div>
          <button className="header-cta-button">
            <img className="background-icon" alt="" src="../group-604.svg" />
            <div className="group-div11">
              <b className="log-in-b">Log In</b>
              <img
                className="icon-awesome-arrow-right"
                alt=""
                src="../icon-awesomearrowright.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
    </IonContent>
    </IonPage>
  );
};

export default AgencyLandingPage;
