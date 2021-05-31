import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';

function App({ colors }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

App.defaultprops = {
  colors: ['red','green','blue']
}

export default App;
