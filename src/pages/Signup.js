import React from "react";
import Full from "../components/Full/";
// import FullText from "../components/FullText/";
// import FullMini from "../components/FullMini";
import FormWrapper from "../components/FormWrapper";
import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Signup() {
  return <div className="signUpBody">
      <Full>
        <Navbar />
        <FormWrapper>
          <div className="formBox">
            <input className="firstNameInput" type="text" placeholder="First Name" />
            <input className="lastNameInput" type="test" placeholder="Last Name" />
            <button className="formButton" type="submit">Continue</button>
          </div>
          <div className="formBelow">
            <p>Forgot Username?</p>
            <p>Forgot Password?</p>
          </div>
        </FormWrapper>
      </Full>
    </div>;
}

export default Signup;
