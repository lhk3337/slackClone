import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Login from "./Login/Login";
import { auth } from "../firebase";

const Routers = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };
  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header signOut={signOut} user={user} />
          <Main user={user} />
        </Container>
      )}
    </Router>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 50px minmax(0, 1fr);
`;
export default Routers;
