import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar/navbar.component";
import ButtonInput from "./components/custom-button/button.component";
import Card from "./components/card/card.component";
import InputField from "./components/input-text/input-text.component";

import "./App.css";

const TM = require("temp-mail-api");

const App = () => {
  const [mailInput, setMailInput] = useState("");
  const [mailMessages, setMailMessages] = useState([]);

  const generateMail = (username = "abcexample") => {
    const email1 = new TM(username); // It will create an address like "temp-email@xxxxxx.xxx"

    // Waiting for the email to be ready (recommended)
    email1.ready((email, error) => {
      if (!error) {
        console.log(`Email address is ${email}`);
        setMailInput(email);
        setMailMessages([]);

        // Getting email list
        email1.getEmails((emails, error) => {
          if (!error) {
            console.log("Email list :", emails);
          } else console.error(error);
        });

        // Fetching email list every 1 second and log if there is a new email
        setInterval(() => {
          email1.getEmails((emails, error, change) => {
            if (!error) {
              if (change) {
                console.log("New mail !", emails);
                setMailMessages(emails.reverse());
              }
            } else console.error(error);
          });
        }, 1000);
      } else console.error(error);
    });
  };

  useEffect(() => {
    generateMail(`${Math.floor(Math.random() * 1000)}example`);
  }, []);

  const handleOnSubmitChange = (event) => {
    event.preventDefault();

    if (!mailInput) {
      alert("Please enter something!");
      return;
    }

    generateMail(mailInput);
  };

  return (
    <div className="main-app">
      <div className="container-fluid">
        <Navbar />

        <div className="container-fluid my-3">
          <form className="row" onSubmit={handleOnSubmitChange}>
            <div className="col-lg-10 col-md-8">
              <InputField
                label="Enter Username"
                id="mailinput"
                placeholder="abc-hello"
                name="mailInput"
                value={mailInput}
                onChange={(e) => setMailInput(e.target.value)}
              />
            </div>
            <div
              className="col-lg-2 col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ButtonInput variant="info" text="Generate" type="submit" />
            </div>
          </form>
        </div>

        <div className="container-fluid my-3">
          <h3>Recent Mails</h3>
          {mailMessages.map((mail) => {
            return (
              <Card
                header={mail.mail_from}
                title={mail.mail_subject}
                body={mail.mail_text}
                key={mail.mail_id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
