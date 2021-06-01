import { Switch, Route, Redirect, useParams } from "react-router-dom";
import ColorsHomepage from './ColorsHomepage';
import Color from './Color';
import AddColorForm from './AddColorForm';
import { useState } from "react";

function Routes(props) {
  const [colors, setColors] = useState(props.colors);

  function addColor(newColor) {
    setColors(previousColors => [...previousColors, newColor]);
  }

  // function getColor() {
  //   const {color} = useParams();
  //   console.log("COLOR--->", color);
  // }
  return (
    <Switch>
        <Route exact path="/colors">
          <ColorsHomepage colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <AddColorForm addColor={addColor}/>
        </Route>
        <Route exact path="/colors/:color">
          <Color colors={colors}/>
        </Route>
        <Redirect to="/colors" />
    </Switch>
  );
}

Routes.defaultProps = {
  colors: ['red','green','blue']
}

export default Routes;