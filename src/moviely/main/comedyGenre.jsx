import Movies from "./movies";
const ComedyGenre = (props) => {
  return (
    <Movies
      {...props}
      myMovies={props.myMovies.filter((movie) => movie.genre == "comedy")}
    />
  );
};
export default ComedyGenre;
