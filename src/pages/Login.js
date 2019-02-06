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
        <nav class="navbar fixed-top navbar-expand-lg bg-light navbar-light">
            <a class="navbar-brand" href="/">Evergarden</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" id="nav-active" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/signup">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
        <Full>
            <div className="flowerSVG">
              <img src="https://i.imgur.com/y3yh4g7.png" alt="It's a flower" />
            </div>
            <FormWrapper>
              <img className="testFlower" src="https://i.imgur.com/y3yh4g7.png" alt="It's a flower" />

                <div className="loginHeader">
                  <p>Need a Evergarden account? <a href="/signup">Create an account</a></p>
                </div>
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
