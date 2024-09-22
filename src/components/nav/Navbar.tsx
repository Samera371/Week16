import "./Navbar.css"; // Import the CSS file for styling

import AddMovieModal from "../modals/AddMovieModal";
import { NewMovie } from "../../types";
// Navbar.js
import { useState } from "react";

interface NavbarProps {
  addMovie: (movie: NewMovie) => void;
}

const Navbar = ({ addMovie }: NavbarProps) => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // const tempNewMovie: NewMovie = {
  //   type: "movie",
  //   title: "New Movie",
  //   description: "New Movie Coming Soon!",
  //   year: "2024",
  //   genre: "Action",
  //   ratings: [7, 8, 8],
  //   imgUrl:
  //     "https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg",
  //   trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  // };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <nav className="navbar">
      <AddMovieModal
        show={showModal}
        handleClose={handleClose}
        addMovie={addMovie}
      />
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="navbar-logo">
            IMBD
          </a>
          <div id="add-movie-icon" onClick={handleShow}>
            +
          </div>
        </div>
        {/* Hamburger menu for mobile */}
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span>&#10005;</span> // X icon
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
        </button>
        {/* Navbar links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;