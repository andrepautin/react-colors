import React from "react";
import {Link} from "react-router-dom";


function ColorsHomepage({ colors }) {
  const colorsLinks = colors.map(
    color => <li key={color}><Link to={`/colors/${color}`}>{color}</Link></li>);

  return (
    <div className="ColorsHomepage">
      <div>
        <h1>
          <Link to="/colors/new">Add a new color!</Link>
        </h1>
      </div>
      <div>
        <p>Select a color!</p>
        <ul>{colorsLinks}</ul>
      </div>
    </div>
  );
}

export default ColorsHomepage;