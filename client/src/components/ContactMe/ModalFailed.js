import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
const ModalFailed = (props) => {
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
          <FontAwesomeIcon icon={faTimesCircle} size="5x" color="#f32013" />
           <p style={{fontSize:"18px", display:"block",paddingTop:"10px"}}>Message sent Failed!</p>
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

export default ModalFailed;