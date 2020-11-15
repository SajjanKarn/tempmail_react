import { useEffect, useContext } from "react";

import Card from "../components/card/card.component";
import ButtonInput from "../components/custom-button/button.component";
import InputField from "../components/input-text/input-text.component";
import Navbar from "../components/navbar/navbar.component";

import UserInputandMessage from "../contexts/user-input.context";

const TM = require("temp-mail-api");

const HomePage = () => {
  const userInputAndMessageCollections = useContext(UserInputandMessage);

  const {
    userInputAndMessage,
    setUserInputAndMessages,
  } = userInputAndMessageCollections;

  const generateMail = (username = "abcexample") => {
    const email1 = new TM(username); // It will create an address like "temp-email@xxxxxx.xxx"

    // Waiting for the email to be ready (recommended)
    email1.ready((email, error) => {
      if (!error) {
        console.log(`Email address is ${email}`);
        setUserInputAndMessages((prevValue) => ({
          ...prevValue,
          mailInput: email,
          mailMessages: [],
        }));

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
                setUserInputAndMessages((prevValue) => ({
                  ...prevValue,
                  mailMessages: emails.reverse(),
                }));
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

  // handleOnSubmit for change....
  const handleOnSubmitChange = (event) => {
    event.preventDefault();

    if (!userInputAndMessage.mailInput) {
      alert("Please enter something!");
      return;
    }

    generateMail(userInputAndMessage.mailInput);
  };
  return (
    <div className="home-page">
      <Navbar />

      <div className="container-fluid my-3">
        <form className="row" onSubmit={handleOnSubmitChange}>
          <div className="col-lg-10 col-md-8">
            <InputField
              label="Enter Username"
              id="mailinput"
              placeholder="abc-hello"
              name="mailInput"
              value={userInputAndMessage.mailInput}
              onChange={(e) => {
                setUserInputAndMessages((prevValue) => ({
                  ...prevValue,
                  mailInput: e.target.value,
                }));
              }}
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



      <div className="container-fluid my-3" style={{ paddingBottom: "80px" }}>
        <h3>Recent Mails</h3>
        {userInputAndMessage.mailMessages.map((mail) => {
          return (
            <Card
              header={mail.mail_from}
              title={mail.mail_subject}
              body={mail.mail_text}
              mail_html={mail.mail_html}
              key={mail.mail_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
