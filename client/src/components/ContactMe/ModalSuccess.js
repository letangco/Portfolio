import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
const ModalSuccess = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal size="lg"
        // show={props.showModal}
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:"center"}}>
          <FontAwesomeIcon icon={faCheckCircle} size="5x" color="#53a653" /> <p style={{fontSize:"18px", display:"block",paddingTop:"10px"}}>Message sent successfully</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSuccess;