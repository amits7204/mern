import logo from "./logo.svg";
import "./App.css";

import Routes from "./route/Routes";
import CustomeNavbar from "./component/CustomeNavbar";

function App() {
  return (
    <div className="App">
      <CustomeNavbar />
      <Routes />
    </div>
  );
}

export default App;
