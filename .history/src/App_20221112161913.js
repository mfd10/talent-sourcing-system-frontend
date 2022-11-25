import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddCandidates from "./users/AddCandidates";

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" e lement={<Home/>}></Route>
      <Route exact path="/addCandidate" element={<AddCandidates/>}></Route>
    </Routes>
      <Home/>
    </Router>
      
      
    </div>
  );
}

export default App;
