import React, { useEffect } from "react";

import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import db from "../firebase";

function App() {
  const getChannels = () => {
    db.collection("chat").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });
    });
  };
  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div>
      <Router />
      <GlobalStyles />
    </div>
  );
}

export default App;
