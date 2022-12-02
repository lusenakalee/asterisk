import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./LogInPage.css";

const LogInPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonDefaultPrimaryClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onASTERISKTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="loginpage-div">
      <nav className="headersection-nav">
        <Button
          className="buttondefaultprimary1"
          variant="primary"
          onClick={onButtonDefaultPrimaryClick}
        >
          Sign Up
        </Button>
        <b className="asterisk-b2" onClick={onASTERISKTextClick}>
          ASTERISK
        </b>
        <nav className="group-nav">
          <div className="about-us-div2" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="pricing-div2">Pricing</div>
          <div className="contact-us-div2" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </nav>
      </nav>
      <img
        className="services-background-icon2"
        alt=""
        src="./assets/services-background.svg"
      />
      <section className="service-card-background2" />
      <div className="password-div1">
        <Form.Group className="inputbase-formgroup6">
          <Form.Control type="text" placeholder="input Password" />
        </Form.Group>
        <div className="group-label-div6">Password</div>
      </div>
      <div className="email-div1">
        <Form.Group className="inputbase-formgroup6">
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>
        <div className="group-label-div6">Email</div>
      </div>
      <Button className="signinbtn-button" variant="primary">
        Sign In
      </Button>
      <b className="log-in-b">LOG IN</b>
      <Link className="signuptext-a" to="/register">
        Don't have an account?<span className="sign-up-now"> Sign Up now.</span>
      </Link>
    </div>
  );
};

export default LogInPage;
