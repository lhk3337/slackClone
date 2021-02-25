import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header/Header";
import Main from "./Main/Main";
const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 50px auto;
`;

const Routers = (props) => {
  return (
    <Router>
      <Container>
        <Header />
        <Main chats={props} />
      </Container>
    </Router>
  );
};
export default Routers;
