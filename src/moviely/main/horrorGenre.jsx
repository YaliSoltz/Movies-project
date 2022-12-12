import Movies from "./movies";
const HorrorGenre = (props) => {
  return (
    <Movies
      {...props}
      myMovies={props.myMovies.filter((movie) => movie.genre == "horror")}
    />
  );
};
export default HorrorGenre;
