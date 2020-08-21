import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
    
function ModelPortfolio() {
  const [show, setShow] = useState(false);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  return (
    <div className="container">
      <h1>React Bootstrap Modal Example - ItSolutionStuff.com</h1>
   
      <Button variant="primary" onClick={handleShow}>
        Open Demo Model
      </Button>
   
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>React Bootstrap Modal Example - ItSolutionStuff.com</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save It!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
   
export default ModelPortfolio;