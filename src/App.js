import React from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Photography</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/decoles" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/decoles/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Page Content */}
      <div className="background-img"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.2)), url('/mountain-bg.jpg')",
        }}
      >
        <div className="CurrentProject">
          <p>Hi, my name is</p>
          <h3>David Coles.</h3>
          <p>Software Developer in California Making Neat Things.</p>
          <button
            onClick={() => window.open('https://github.com/decoles', '_blank')}
            type="button"
            className="btn btn-outline-light btn-lg"
          >
            Checkout Some of My Projects
          </button>
        </div>
      </div>
    </div>
  );
}