import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Popup from "../component/pop-up";

export default function Viewcandidate() {
    
    const { id } = useParams();
    
    const [candidate, setcandidate] = useState({
    name: "",
    content: "",
    mail: "",
    respond: "",
    date: "",
  });
  

  useEffect(() => {
    loadcandidate();
  }, []);

  const loadcandidate = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/interactions?candidateId=${id}`);
    setcandidate(result.data);
    console.log(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Candidate Details</h2>

          <div className="card">
            <div className="card-header">
              Details Of Candidate
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Content </b>
                  {candidate.candidateResponded}
                </li>
                <li className="list-group-item">
                  <b>TYPE </b>
                  {candidate.content }asdas
                </li>
                <li className="list-group-item">
                  <b>Respond: </b>
                  {candidate.date}
                </li>
                <li className="list-group-item">
                  <b>Date: </b>
                  {candidate.id}
                </li>
                <li className="list-group-item">
                  <b>Date: </b>
                  {candidate.type}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2 mx-2" to={"/"}>
            Back to Home
          </Link>
          <Link className="btn btn-outline-danger mx-2 "  to={`/edit/interactions/${candidate.id}`}>
            Edit Interactions
          </Link></div>
          
        
      </div>
    </div>
  );
}