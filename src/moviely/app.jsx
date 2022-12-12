import React, { Component } from "react";
import Main from "./main";
import image from "./images/872-8720323_movie-theater-png-sala-de-cine-png.png";
import Sider from "./sider";
import Header from "./header";
import "./moviely.css";
class App extends Component {
  state = {
    movies: [
      {
        index: 0,
        id: 121,
        name: "shrek",
        genre: "comedy",
        rating: "10",
        like: false,
      },
      {
        index: 1,
        id: 14,
        name: "iron man",
        genre: "fantasy",
        rating: "8",
        like: false,
      },
      {
        index: 2,
        id: 111,
        name: "gigi",
        genre: "action",
        rating: "4",
        like: false,
      },
      {
        index: 3,
        id: 353,
        name: "titanic",
        genre: "drama",
        rating: "6",
        like: false,
      },
      {
        index: 4,
        id: 12,
        name: "die2",
        genre: "horror",
        rating: "7",
        like: false,
      },
      {
        index: 5,
        id: 227,
        name: "fast&furias",
        genre: "action",
        rating: "9",
        like: false,
      },
      {
        index: 6,
        id: 19,
        name: "avatar",
        genre: "fantasy",
        rating: "7",
        like: false,
      },
      {
        index: 7,
        id: 13,
        name: "grown ups",
        genre: "comedy",
        rating: "10",
        like: false,
      },
    ],
    catagoryColor:
      "position-absolute top-0 start-100 translate-middle p-2  bg-danger border border-light rounded-circle",
    itemsPerPage: 4,
  };

  render() {
    return (
      <div style={{ backgroundImage: `url(${image})`, height: "100vw" }}>
        <div className=" container text-center">
          <div className="row">
            <div className="col">
              <Header
                myMovies={this.state.movies}
                changeItemsPerPage={(num) => this.changeItemsPerPage(num)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <Sider
                actionSum={() => this.actionSum()}
                comedySum={() => this.comedySum()}
                dramaSum={() => this.dramaSum()}
                fantasySum={() => this.fantasySum()}
                horrorSum={() => this.horrorSum()}
                catagoryColor={() => this.catagoryColor()}
                myMovies={this.state.movies}
              />
            </div>
            <div id="movies" className="col" style={{ marginTop: 150 }}>
              <Main
                myMovies={this.state.movies}
                myDelete={(id) => this.myDelete(id)}
                rowColor={(index) => this.rowColor(index)}
                likeIsTrue={(id) => this.likeIsTrue(id)}
                addMovie={(obj) => this.addMovie(obj)}
                itemsPerPage={this.state.itemsPerPage}
              />
            </div>
          </div>
          {/* <div className="row">
            <div className="col">
              <Footer />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
  myDelete = (id) => {
    let movies = this.state.movies.filter((movie) => movie.id != id);
    this.setState({ movies });
  };

  rowColor = (val) => {
    if (val % 4 == 0) return "table-info";
    else if (val % 4 == 1) return "table-primary";
    else if (val % 4 == 2) return "table-light";
    else if (val % 4 == 3) return "table-secondary";
  };

  actionSum = () => {
    let action = this.state.movies.filter((movie) => movie.genre == "action");
    return action.length;
  };
  comedySum = () => {
    let comedy = this.state.movies.filter((movie) => movie.genre == "comedy");
    return comedy.length;
  };
  dramaSum = () => {
    let drama = this.state.movies.filter((movie) => movie.genre == "drama");
    return drama.length;
  };
  fantasySum = () => {
    let fantasy = this.state.movies.filter((movie) => movie.genre == "fantasy");
    return fantasy.length;
  };
  horrorSum = () => {
    let horror = this.state.movies.filter((movie) => movie.genre == "horror");
    return horror.length;
  };

  catagoryColor = () => {
    return this.state.catagoryColor;
  };

  likeIsTrue = (id) => {
    let movies = this.state.movies.map((movie) => {
      if (movie.id == id) {
        movie.like == false ? (movie.like = true) : (movie.like = false);
      }
    });
    this.setState(movies);
  };
  addMovie = (obj) => {
    if (this.state.movies.every((movie) => movie.id != obj.id)) {
      this.state.movies.push(obj);
      this.setState({ movies: this.state.movies });
    } else alert("This ID already exsist");
  };
  changeItemsPerPage = (num) => {
    this.setState({ itemsPerPage: parseInt(num) });
  };
}

export default App;
