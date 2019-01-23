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
    <div>
        <Full backgroundImage="https://i.imgur.com/pzDvxIN.jpg">
            <FullText>ESG</FullText>
            <FullMini>This is a Test</FullMini>
        </Full>
    </div>
);
}

export default Home;
