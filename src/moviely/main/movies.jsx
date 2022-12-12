import Movie from "./movie";
import "../moviely.css";
import { useState } from "react";
const Movies = (props) => {
  const { myMovies, myDelete, rowColor, likeIsTrue, itemsPerPage } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = myMovies.slice(startIndex, endIndex);
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Fav</th>
          </tr>
        </thead>
        <tbody>
          {pageItems.map((movie, index) => (
            <Movie
              index={index}
              key={index}
              id={movie.id}
              name={movie.name}
              genre={movie.genre}
              rating={movie.rating}
              rowColor={rowColor(index)}
              myDelete={() => myDelete(movie.id)}
              likeIsTrue={() => likeIsTrue(movie.id)}
              like={movie.like}
            />
          ))}
        </tbody>
      </table>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li
              role="button"
              onClick={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
              className="page-item"
            >
              <a class="page-link">Previous</a>
            </li>
            <li className="page-item disabled">
              <a className="page-link">{currentPage}</a>
            </li>
            <li
              role="button"
              onClick={() => {
                if (currentPage < myMovies.length / itemsPerPage)
                  setCurrentPage(currentPage + 1);
              }}
              className="page-item"
            >
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Movies;
