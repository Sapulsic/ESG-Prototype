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
        <div className="calenderSVG">
          <img src="https://i.imgur.com/gvjdBwa.png" alt="It's a cool SVG" />
        </div>
        <FullMini>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
          leo vehicula, congue dolor in, pretium enim. Vivamus nec ultrices
          lacus.
        </FullMini>
        <a href="/signup">
          <Button>Get Started</Button>
        </a>
      </div>
      <div className="homeImage" />
    </Full>
  </div>
);
}

export default Home;
