import React from "react";
import { Link } from "react-router-dom";
import "../moviely.css";

const Catagories = (props) => {
  const {
    actionSum,
    comedySum,
    dramaSum,
    fantasySum,
    horrorSum,
    catagoryColor,
    myMovies,
  } = props;
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          position: "fixed",
          top: 130,
        }}
      >
        <Link to="/">
          <button
            id="action"
            className="btn btn-secondary  position-relative "
            style={{ width: 100 }}
          >
            movies
            <span className={catagoryColor()}>
              <span>{myMovies.length}</span>
            </span>
          </button>
        </Link>

        <Link to="/actiongenre">
          <button
            id="action"
            className="btn btn-primary  position-relative "
            style={{ width: 100 }}
          >
            action
            <span className={catagoryColor()}>
              <span>{actionSum()}</span>
            </span>
          </button>
        </Link>

        <Link to="/comedygenre">
          <button
            id="comedy"
            className="btn btn-primary  position-relative"
            style={{ width: 100 }}
          >
            comedy
            <span className={catagoryColor()}>
              <span>{comedySum()}</span>
            </span>
          </button>
        </Link>

        <Link to="/dramagenre">
          <button
            id="drama"
            className="btn btn-primary position-relative"
            style={{ width: 100 }}
          >
            drama
            <span className={catagoryColor()}>
              <span>{dramaSum()}</span>
            </span>
          </button>
        </Link>

        <Link to="/fantasygenre">
          <button
            id="fantasy"
            className="btn btn-primary position-relative"
            style={{ width: 100 }}
          >
            fantasy
            <span className={catagoryColor()}>
              <span>{fantasySum()}</span>
            </span>
          </button>
        </Link>

        <Link to="/horrorgenre">
          <button
            id="horror"
            className="btn btn-primary position-relative"
            style={{ width: 100 }}
          >
            horror
            <span className={catagoryColor()}>
              <span>{horrorSum()}</span>
            </span>
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Catagories;
