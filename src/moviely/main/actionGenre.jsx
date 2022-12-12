import Movies from "./movies";
const ActionGenre = (props) => {
  return (
    <Movies
      {...props}
      myMovies={props.myMovies.filter((movie) => movie.genre == "action")}
    />
  );
};
export default ActionGenre;
