import React from "react";
import {Link, Redirect} from "react-router-dom";
import {useParams} from "react-router-dom";

function Color({colors}) {
  const {color} = useParams();
  if (!(colors.includes(color))) {
    return <Redirect to="/colors"/>
  }
  return (
    <div className="Color" style={{backgroundColor: `${color}`}}>
      <h1>{color}</h1>
    </div>
  );
}

export default Color;