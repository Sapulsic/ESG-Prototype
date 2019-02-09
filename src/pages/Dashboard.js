import React from "react";
import Full from "../components/Full/";
import Navbar from "../components/Navbar";
import ActiveMsg from "../components/ActiveMsg";
// import ActiveMsgName from "../components/ActiveMsgName";
import ActiveMsgBar from "../components/ActiveMsgBar";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Dashboard() {
  return (
    <div className="dashBody">
      <Navbar />
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="/">
          Evergarden
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" id="nav-active" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Full>
        <ActiveMsg>
          <h4>Active Messages</h4>
          <ul>
            <ActiveMsgBar />
          </ul>
        </ActiveMsg>
      </Full>
    </div>
  );
}

export default Dashboard;
