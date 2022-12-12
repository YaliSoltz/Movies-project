import Movies from "./movies";
const DramaGenre = (props) => {
  return (
    <Movies
      {...props}
      myMovies={props.myMovies.filter((movie) => movie.genre == "drama")}
    />
  );
};
export default DramaGenre;
