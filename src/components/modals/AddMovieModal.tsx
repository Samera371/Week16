import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { ChangeEvent, FC, FormEvent, useState } from "react";

import { NewMovie } from "../../types";
import { genres } from "../../data/genres";

interface AddMovieModalProps {
  show: boolean;
  handleClose: () => void;
  addMovie: (movie: NewMovie) => void;
}

const AddMovieModal: FC<AddMovieModalProps> = ({
  show,
  handleClose,
  addMovie,
}) => {
  // Initial form data state
  const [movieData, setMovieData] = useState<NewMovie>({
    type: "movie",
    title: "",
    description: "",
    year: "",
    genre: genres[0], // Default to the first genre
    ratings: [],
    imgUrl: "",
    trailerUrl: "",
  });

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add the movie and close the modal
    addMovie(movieData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie/Show</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Form for adding a new movie */}
        <Form onSubmit={handleSubmit}>
          {/* Type (Movie or TV Show) - Select Dropdown */}
          <Form.Group controlId="formType" className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select
              name="type" // Name links it to the state
              value={movieData.type} // Value is controlled by React state
              onChange={handleChange} // Calls handleChange whenever the user selects a new option
              required
            >
              <option value="movie">Movie</option>
              <option value="tv-show">TV Show</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formTitle" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={movieData.title}
              onChange={handleChange}
              placeholder="Star Wars"
              required
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={movieData.description}
              onChange={handleChange}
              placeholder="In a galaxy far far away..."
              required
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formYear" className="mb-3">
                <Form.Label>Release Year</Form.Label>
                <Form.Control
                  type="text"
                  name="year"
                  value={movieData.year}
                  onChange={handleChange}
                  placeholder="2024"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formGenre" className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Select
                  name="genre"
                  value={movieData.genre}
                  onChange={handleChange}
                  required
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formImgUrl" className="mb-3">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="text"
              name="imgUrl"
              value={movieData.imgUrl}
              onChange={handleChange}
              placeholder="https://img.freepik.com..."
              required
            />
          </Form.Group>

          <Form.Group controlId="formTrailerUrl" className="mb-3">
            <Form.Label>Trailer URL</Form.Label>
            <Form.Control
              type="text"
              name="trailerUrl"
              value={movieData.trailerUrl}
              onChange={handleChange}
              placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ..."
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Movie
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddMovieModal;