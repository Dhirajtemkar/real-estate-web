import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Nav/Nav";
import { navObject } from "./component/Nav/NavObject";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {
            navObject.map(e => (
              <Route path={e.path} element={e.element} />
            ))
          }
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
