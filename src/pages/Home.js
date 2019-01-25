import React from "react";
import Full from "../components/Full/";
import FullText from "../components/FullText/";
import FullMini from "../components/FullMini";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home() {
return (
  <div className="homeBody">
    <Full>
      <FullText>
        Get Started,
        <br /> Send your love
      </FullText>
      <FullMini>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac leo
        vehicula, congue dolor in, pretium enim. Vivamus nec ultrices lacus.
        Morbi ex arcu, luctus et hendrerit ut, vestibulum sed erat. In finibus
        est tristique scelerisque molestie.
      </FullMini>
    </Full>
  </div>
);
}

export default Home;
