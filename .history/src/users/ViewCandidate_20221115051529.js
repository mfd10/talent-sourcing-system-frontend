import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewcandidate() {
    
    const { id } = useParams();
    
    const [candidate, setcandidate] = useState({
    name: "",
    content: "",
    respond: "",
    date: "",
  });
  

  useEffect(() => {
    loadInteractions();
  }, []);

  const loadInteractions = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/interactions?candidateId=${id}`);
    setcandidate(result.data);
    console.log(result.data);
  };

  const deleteInteractions = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/candidates/${id}`);
    loadInteractions();
  };

  return (
    <div className="container">
    AA
      <div className="py-4">
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
                <td>{candidate.date}</td>
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