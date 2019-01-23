import React from "react";
import Full from "../components/Full/";
// import FullText from "../components/FullText/";
// import FullMini from "../components/FullMini";
import FormWrapper from "../components/FormWrapper";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Login() {
  return <div>
    <Full>
        <FormWrapper>
            <div className="formBox">
                <p className="formText">Username</p>
                <input className="formInputs" type="text" />
                <p className="formText">Password</p>
                <input className="formInputs" type="password" />
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
