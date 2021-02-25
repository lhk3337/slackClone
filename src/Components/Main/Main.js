import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import React from "react";
import Login from "./Login";
import Chat from "./Chat";
import Sidebar from "../Sidebar/Sidebar";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;

const Main = (props) => {
  return (
    <MainContainer>
      <Sidebar chats={props} />
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/chat" exact component={Chat}></Route>
      </Switch>
    </MainContainer>
  );
};

export default Main;
