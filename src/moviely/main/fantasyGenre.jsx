import Movies from "./movies";
const FantasyGenre = (props) => {
  return (
    <Movies
      {...props}
      myMovies={props.myMovies.filter((movie) => movie.genre == "fantasy")}
    />
  );
};
export default FantasyGenre;
