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
        <div className="flowerSVG">
          <img src="https://i.imgur.com/y3yh4g7.png" alt="It's a flower" />
        </div>
        <FormWrapper>
          <div className="signUpHeader">
            <h1>Express your feelings forever.</h1>
            <p>Evergarden allows you to send custom message with dates.</p>
          </div>
          <div className="signUpFormBox">
            <input className="firstNameInput" type="text" placeholder="First Name" />
            <input className="lastNameInput" type="test" placeholder="Last Name" />
          </div>
          <div className="formBoxTwo">
            <input className="emailInput" type="text" placeholder="Email Address" />
            <input className="signPassInput" type="password" placeholder="Password" />
            <button className="formContinue" type="submit">Continue</button>
          </div>
          <div className="formBelow">
            <p>Already started? <a href="/login">Log in</a> to get started!</p>
          </div>
        </FormWrapper>
      </Full>
    </div>;
}

export default Signup;
