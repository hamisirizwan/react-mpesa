// import "dotenv";

import NavBar from "./components/NavBar";
import Docs from "./pages/Docs";
import PayPage from "./pages/PayPage";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <NavBar />
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <Docs />
          </div>
          <div className="col-sm-12 col-lg-6">
            <PayPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
