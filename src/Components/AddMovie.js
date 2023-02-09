import React from 'react';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddMovie = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
    Add Movie
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <input type="text" placeholder='MOVIE image'/>
    <input type="text" placeholder='MOVIE NAME'/>
    <input type="number" placeholder='MOVIE date'/>
    <input type="text" placeholder='MOVIE description'/>
    <input type="text" placeholder='MOVIE type'/>
    <input type="number" placeholder='MOVIE rating'/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>

    </div>
  )
}

export default AddMovie
