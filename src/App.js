import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/footer/footer.component";

import HomePage from "./pages/HomePage.page";
import RenderMailContent from "./pages/RenderMailContent.page";

import UserInputandMessage from "./contexts/user-input.context";

import "./App.css";

const App = () => {
  const [userInputAndMessage, setUserInputAndMessages] = useState({
    mailInput: "",
    mailMessages: [],
  });

  return (
    <div className="main-app">
      <UserInputandMessage.Provider
        value={{ userInputAndMessage, setUserInputAndMessages }}
      >
        <div className="container-fluid">
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </div>
      </UserInputandMessage.Provider>

      <Footer />
    </div>
  );
};

export default App;
