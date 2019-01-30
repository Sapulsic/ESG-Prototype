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

function Login() {
  return <div className="loginBody">
        <Navbar />
        <Full>
            <div className="flowerSVG">
              <img src="https://i.imgur.com/y3yh4g7.png" alt="It's a flower" />
            </div>
            <FormWrapper>
                <div className="loginFormBox">
                    <input className="formInputs" type="text" placeholder="Username"/>
                    <input className="formInputs" type="password" placeholder="Password" />
                    <button className="formButton" type="submit">Log In</button>
                </div>
                <div className="formBelow">
                    <p>Forgot Username?</p>
                    <p>Forgot Password?</p>
                </div>
            </FormWrapper>
        </Full>
    </div>;
}

export default Login;
