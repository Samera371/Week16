import Button from "react-bootstrap/Button";
import { FC } from "react";
import Modal from "react-bootstrap/Modal";

interface DeleteMovieModalProps {
  show: boolean;
  handleClose: () => void;
  deleteMovie: () => void;
}

const DeleteMovieModal: FC<DeleteMovieModalProps> = ({
  handleClose,
  deleteMovie,
  show,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Movie/Show</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this movie?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteMovie()}>
            Delete Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteMovieModal;