import React, { Component } from "react";
import "../moviely.css";
import image from "../images/img.jpg";
import backgroundImage from "../images/addmovie8.png";
import movielyIMG from "../images/moviely.png";
class AddMovie extends Component {
  state = {};
  movieId = React.createRef();
  movieName = React.createRef();
  movieGenre = React.createRef();
  movieRating = React.createRef();

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 1000,
            borderRadius: 100,
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: 50,
            }}
          >
            <div
              className="mx-auto"
              style={{
                width: 300,
                borderRadius: 50,
              }}
            >
              <h2 className="add_movie_h2">
                <img src={movielyIMG} alt="" />
              </h2>
              <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={(e) => this.handleOnSubmit(e)}
              >
                <div className="form-group">
                  <label className="add_movie_label" htmlFor="id">
                    Id:
                  </label>
                  <input
                    ref={this.movieId}
                    type="number"
                    className="form-control bg-light"
                    id="id"
                    placeholder="Insert a number.."
                    min="1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="add_movie_label" htmlFor="name">
                    Name:
                  </label>
                  <input
                    ref={this.movieName}
                    type="text"
                    className="form-control bg-light"
                    id="name"
                    placeholder="Example: Jony 2"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="add_movie_label" htmlFor="genre">
                    Genre:
                  </label>
                  <select
                    ref={this.movieGenre}
                    defaultValue="..."
                    className="form-control bg-light"
                    id="genre"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      opacity: "0.5",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                    required
                  >
                    <option value="..." disabled hidden>
                      ...
                    </option>
                    <option>action</option>
                    <option>comedy</option>
                    <option>drama</option>
                    <option>fantasy</option>
                    <option>horror</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="add_movie_label" htmlFor="rating">
                    Rating:
                  </label>
                  <input
                    ref={this.movieRating}
                    type="number"
                    className="form-control  bg-light"
                    id="rating"
                    placeholder="1-10"
                    min="1"
                    max="10"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary m-5">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    const movieId = this.movieId.current.value;
    const movieName = this.movieName.current.value;
    const movieGenre = this.movieGenre.current.value;
    const movieRating = this.movieRating.current.value;
    let newMovie = {
      index: this.props.myMovies.length,
      id: movieId,
      name: movieName,
      genre: movieGenre,
      rating: movieRating,
      like: false,
    };
    this.props.addMovie(newMovie);
    e.target.reset();
  };
}
export default AddMovie;
