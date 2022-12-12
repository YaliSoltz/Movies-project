import { Route, Routes } from "react-router-dom";
import React from "react";
import Movies from "./main/movies";
import ActionGenre from "./main/actionGenre";
import ComedyGenre from "./main/comedyGenre";
import DramaGenre from "./main/dramaGenre";
import FantasyGenre from "./main/fantasyGenre";
import HorrorGenre from "./main/horrorGenre";
import AddMovie from "./main/addMovie";

const Main = (props) => {
  return (
    <React.Fragment>
      <div>
        <Routes>
          <Route path="/" element={<Movies {...props} />} />
          <Route path="/addnewmovie" element={<AddMovie {...props} />} />
          <Route path="/actiongenre" element={<ActionGenre {...props} />} />
          <Route path="/comedygenre" element={<ComedyGenre {...props} />} />
          <Route path="/dramagenre" element={<DramaGenre {...props} />} />
          <Route path="/fantasygenre" element={<FantasyGenre {...props} />} />
          <Route path="/horrorgenre" element={<HorrorGenre {...props} />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default Main;
