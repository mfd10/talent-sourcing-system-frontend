import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    const result = await axios.get(`http://localhost:8080/candidates/${id}`);
    setcandidate(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Candidate Details</h2>

          <div className="card">
            <div className="card-header">
              Details of candidate id : {candidate.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {candidate.name}
                </li>
                <li className="list-group-item">
                  <b>Content</b>
                  {candidate.content}
                </li>
                <li className="list-group-item">
                  <b>Mail: </b>
                  {candidate.mail}
                </li>
                <li className="list-group-item">
                  <b>Respond:</b>
                  {candidate.candidate_responded}
                </li>
                <li className="list-group-item">
                  <b>Date:</b>
                  {candidate.date}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}