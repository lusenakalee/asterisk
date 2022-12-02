import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp1Page.css";

const SignUp1Page: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogInButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButtonDefaultPrimaryContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onASTERISKTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  
  const onNextButtonClick = useCallback(() => {
    navigate("/signUp");
  }, [navigate]);

  return (
    <div className="signup1page-div">
      <div className="titlesection-div1">
        <div
          className="buttondefaultprimary-div"
          onClick={onButtonDefaultPrimaryContainerClick}
        >
          <div className="primary-007bff" />
          <Button
            className="log-in-button"
            variant="primary"
            onClick={onLogInButtonClick}
          >
            Log In
          </Button>
        </div>
        <div className="about-us-div1" onClick={onAboutUsTextClick}>
          About Us
        </div>
        <b className="asterisk-b1" onClick={onASTERISKTextClick}>
          ASTERISK
        </b>
        <div className="pricing-div1">Pricing</div>
        <div className="contact-us-div1" onClick={onContactUsTextClick}>
          Contact Us
        </div>
      </div>
      <img
        className="services-background-icon1"
        alt=""
        src="./assets/services-background.svg"
      />
      <section className="service-card-background1" />
      <div className="firstname-div">
      <Form.Group className="inputbase-formgroup4">
          <Form.Control type="text" />
        </Form.Group>
        
        <div className="fname-div">First Name</div>
      </div>
      <div className="lastname-div">
        <Form.Group className="inputbase-formgroup4">
          <Form.Control type="text" />
        </Form.Group>
        <div className="fname-div">Last Name</div>
      </div>
      <div className="username-div">
        <Form.Group className="inputbase-formgroup4">
          <Form.Control type="text" />
        </Form.Group>
        <div className="fname-div">Set user name</div>
      </div>
      < Button className="next-button" 
      variant="primary"
      onClick={onNextButtonClick}>
        Next
      </Button>
      <b className="sign-up-b">Sign Up</b>
      <Link className="helper-text-a" to="/login">
        Already have an account?
        <span className="log-in-here"> Log In here</span>
      </Link>
    </div>
  );
};

export default SignUp1Page;
