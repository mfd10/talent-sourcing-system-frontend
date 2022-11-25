import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewcandidate() {
  const { id } = useParams();

  const [candidate, setcandidate] = useState([]);


  useEffect(() => {
    loadInteractions();
  }, []);

  const loadInteractions = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/interactions?candidateId=${id}`
    );
    setcandidate(result.data);
  };

  const deleteInteractions = async (candidateID) => {
    await axios.delete(`http://localhost:8080/api/v1/interactions/${candidateID}`);
    loadInteractions();
  };

  return (
    <div className="container">
      <div className="py-4">
        <b>Details</b>
        <Link className="btn btn-primary mx-5 pl-5" to={`/add/interactions/${id}`}>
          Add New interactions
        </Link>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Type</th>
              <th scope="col">Content</th>
              <th scope="col">Candidate Responded</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidate.map((candidate, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{candidate.type}</td>
                <td>{candidate.content}</td>
                <td>{candidate.candidateResponded}</td>
                <td>{candidate.date.substring(0,10)}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edit/interactions/${candidate.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteInteractions(candidate.id)}
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
