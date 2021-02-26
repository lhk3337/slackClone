import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Chat from "./Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";
import db from "../../firebase";

const Main = ({ user }) => {
  const [chats, setChats] = useState([]);

  const getChannels = () => {
    db.collection("chat").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <MainContainer>
      <Sidebar chats={chats} />
      <Switch>
        <Route
          path="/chat/:channelId"
          exact
          render={() => <Chat user={user} />}
        ></Route>
        <Route path="/">Select or Create Channel</Route>
      </Switch>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;

export default Main;
