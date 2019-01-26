import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return <Router>
          <div>
            {/* <Navbar /> */}
            {/* <Wrapper> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/main" component={Main} />
            {/* </Wrapper> */}
            {/* <Footer /> */}
          </div>
        </Router>;
}

export default App;
