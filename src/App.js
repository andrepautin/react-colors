import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

// App.defaultProps = {
//   colors: ['red','green','blue']
// }

export default App;
