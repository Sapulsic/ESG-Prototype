import React from "react";
import Full from "../components/Full/";
import FullText from "../components/FullText/";
import FullMini from "../components/FullMini";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home() {
return (
  <div className="homeBody">
    <Navbar />
    <Full>
      <div className="textBody">
      <FullText>
        Get Started,
        <br /> send your love
      </FullText>
      <FullMini>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac leo
        vehicula, congue dolor in, pretium enim. Vivamus nec ultrices lacus.
      </FullMini>
      <Button>
        Get Started
      </Button>
      </div>
      <div className="homeImage"></div>
    </Full>
  </div>
);
}

export default Home;
