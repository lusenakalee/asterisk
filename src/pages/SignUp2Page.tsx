import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SignUp2Page.css";

const SignUp2Page: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonDefaultPrimaryClick = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  const onASTERISKTextClick = useCallback(() => {
    navigate("/landingpage");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/landingpage");
  }, [navigate]);

  const onTitleSectionContainerClick = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  return (
    <div className="signup2page-div">
      <div className="titlesection-div" onClick={onTitleSectionContainerClick}>
        <Button
          className="buttondefaultprimary"
          variant="primary"
          onClick={onButtonDefaultPrimaryClick}
        >
          Log In
        </Button>
        <div className="about-us-div">About Us</div>
        <b className="asterisk-b" onClick={onASTERISKTextClick}>
          ASTERISK
        </b>
        <div className="pricing-div">Pricing</div>
        <div className="contact-us-div" onClick={onContactUsTextClick}>
          Contact Us
        </div>
      </div>
      <img
        className="services-background-icon"
        alt=""
        src="./assets/services-background.svg"
      />
      <div className="service-card-background" />
      <div className="email-div">
        <Form.Group className="inputbase-formgroup">
          <Form.Control type="email" />
        </Form.Group>
        <div className="group-label-div">Email</div>
      </div>
      <div className="phonenumber-div">
        <Form.Group className="inputbase-formgroup">
          <Form.Control type="number" />
        </Form.Group>
        <div className="group-label-div">Phone Number</div>
      </div>
      <div className="password-div">
        <Form.Group className="inputbase-formgroup">
          <Form.Control type="text" />
        </Form.Group>
        <div className="group-label-div">Set New Password</div>
      </div>
      <div className="repeatpassword-div">
        <Form.Group className="inputbase-formgroup">
          <Form.Control type="text" />
        </Form.Group>
        <div className="group-label-div">Repeat Password</div>
      </div>
      <Button className="submitbtn-button" variant="primary">
        Submit
      </Button>
    </div>
  );
};

export default SignUp2Page;
