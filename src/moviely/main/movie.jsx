import "../moviely.css";
const Movie = (props) => {
  const { rowColor, id, name, genre, rating, myDelete, like, likeIsTrue } =
    props;
  return (
    <tr className={rowColor} key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{genre}</td>
      <td>{rating}</td>
      <td>
        <i
          className={like == true ? "bi bi-heart-fill" : "bi bi-heart"}
          style={{ cursor: "pointer", fontSize: 30 }}
          onClick={likeIsTrue}
        ></i>
      </td>
      <td>
        <button onClick={() => myDelete()} className="btn btn-danger btn-lg">
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default Movie;
