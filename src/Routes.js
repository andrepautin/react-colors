import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import ColorsHomepage from './ColorsHomepage';
import Color from './Color';
import AddColorForm from './AddColorForm';

function Routes({ colors }) {
  return (
    <Switch>
        <Route exact path="/colors">
          <ColorsHomepage colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <AddColorForm />
        </Route>
        <Route exact path="/colors/:color">
          <Color />
        </Route>
        <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;