import "../moviely.css";
import movielyImg from "../images/moviely.png";
import { Link } from "react-router-dom";
import "../moviely.css";
import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg bg-secondary rounded"
          id="navbar"
        >
          <div className="container-md">
            <Link to="/" id="moviely_h1">
              <img src={movielyImg} alt="error" />
            </Link>
            <Link to="/addnewmovie" id="add_new_movie_p">
              <p className="m-3">Add new movie</p>
            </Link>
            <div>
              <label className="add_movie_label" htmlFor="movie_in_page">
                Movies in page:
              </label>
              <select
                onChange={(e) => this.handleChange(e.target.value)}
                defaultValue="..."
                id="movie_in_page"
              >
                <option value="..." disabled hidden>
                  ...
                </option>
                {this.props.myMovies.map((movie, index) => (
                  <option>{index + 1}</option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
  handleChange = (num) => {
    this.props.changeItemsPerPage(num);
  };
}

export default NavBar;
