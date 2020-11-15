import React from "react";

import ButtonInput from "../custom-button/button.component";
import Modal from "react-modal";

import "./card.styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    height: "500px",
    fontFamily: "sans-serif"
  },
};

Modal.setAppElement("#root");

const Card = ({ header, title, body, mail_html }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      className="card text-white bg-primary mb-3"
      style={{ maxWidth: "20rem" }}
    >
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{body.slice(0, 100)}...</p>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={title}
        >
          <h4>From: {header}</h4>
          <ButtonInput variant="danger" onClick={closeModal} text="Close" />

          <div
            className="mail_body my-3"
            dangerouslySetInnerHTML={{ __html: mail_html }}
          ></div>
        </Modal>
        <ButtonInput variant="info" text="View" onClick={openModal} />
      </div>
    </div>
  );
};

export default Card;
