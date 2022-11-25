import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCandidates from "./users/AddCandidates";
import EditCandidate from "./users/EditCandidate";
import Viewcandidate from "./interactions/ViewInteractions";
import EditInteractions from "./interactions/EditInteractions";
import AddInteractions from "./interactions/AddInteractions";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home /> }></Route>
          <Route exact path="/addcandidate" element={<AddCandidates /> }></Route>
          <Route exact path="/edit/:id" element={<EditCandidate></EditCandidate>}></Route>
          <Route exact path="/view/:id" element={<Viewcandidate></Viewcandidate>}></Route>
          <Route exact path="/edit/interactions/:id" element={<EditInteractions></EditInteractions>}></Route>
          <Route exact path="/add/interactions/:id" element={<AddInteractions></AddInteractions>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
