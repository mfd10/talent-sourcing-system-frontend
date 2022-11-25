import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCandidates from "./users/AddCandidates";
import EditCandidate from "./users/EditCandidate";
import Viewcandidate from "./users/ViewCandidate";
import EditInteractions from "./users/EditInteractions";

function App() {
  const cors = require('cors');
  return (
    <div className="App">
  App.use(cors())
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home /> }></Route>
          <Route exact path="/addcandidate" element={<AddCandidates /> }></Route>
          <Route exact path="/edit/:id" element={<EditCandidate></EditCandidate>}></Route>
          <Route exact path="/view/:id" element={<Viewcandidate></Viewcandidate>}></Route>
          <Route exact path="/edit/interactions/:id" element={<EditInteractions></EditInteractions>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
