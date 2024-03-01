import { BrowserRouter, useRoutes } from "react-router-dom";
import "../App.css";
import { getRoutes } from "../layout/Routes";

function App() {
  const router = useRoutes(getRoutes(1));
  return (
    // <div className="App">

    <header className="App-header">{router}</header>

    // </div>
  );
}

export default App;
