import React, { useEffect, useState } from "react";

import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import db from "../firebase";

function App() {
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
    <div>
      <Router chats={chats} />
      <GlobalStyles />
    </div>
  );
}

export default App;
