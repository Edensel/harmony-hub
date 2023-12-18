import React from "react";

import { Link } from "react-router-dom";

const NavBar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {

  return (

    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="logo.png" alt="Harmony Hub" /> Harmony-Hub
        </a>
        <div>
        <Link className="navbar-brand"  exact to="/about">
                About
          </Link></div>     
        <div className="dropdown">
          <button
            className="btn btn-sm btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorite Music
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item text-secondary" href="/">
                All Playlist
              </a>
            </li>
            <li>
              <Link className="dropdown-item" exact to="/likedMusic">
                Liked Music
              </Link>
            </li>            
            <li>
              <button
                type="button"
                className="btn text-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Create new
              </button>
            </li>
          </ul>          
        </div> 
               

        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={handleKeyPress}
            className="form-control me-2 w-75"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button onClick={fetchMusicData} className="btn btn-outline-success">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
