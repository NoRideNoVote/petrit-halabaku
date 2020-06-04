import React from "react";
import Container from "react-bootstrap/Container";

import "./main-header.scss";

const MainHeader = (props) => {
  return (
    <Container>
      <header className="main-header">{props.children}</header>
    </Container>
  );
};

export default MainHeader;
