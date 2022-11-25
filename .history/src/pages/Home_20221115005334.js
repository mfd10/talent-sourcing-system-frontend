import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [candidates, setCandidates] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    loadCandidates();
  }, []);

  

  const loadCandidates = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/candidates");
    setCandidates(result.data);
  
  };

  const deleteCandidate = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/candidates/${id}`);
    loadCandidates();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name Surname</th>
              <th scope="col">Contact Information</th>
              <th scope="col">Candidate Status</th>
              <th scope="col">Previous Interaction</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{candidate.name}</td>
                <td>{candidate.contactInformation}</td>
                <td>{candidate.candidateInteraction.type}</td>
                <td>{candidate.status}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/view/${candidate.id}`}
                  >
                    View
                  </Link>

                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edit/${candidate.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCandidate(candidate.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
