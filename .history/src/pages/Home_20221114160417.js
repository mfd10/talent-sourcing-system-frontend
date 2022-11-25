import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";

export default function Home() {
  const [candidates, setCandidates] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    loadCandidates();
  }, []);

  

  const loadCandidates = async () => {
    const result = await axios.get("http://localhost:8080/candidates");
    setCandidates(result.data);
    console.log("DATEEEEEEEEEEEEEEEEEEEEEEEEE");
    var formattedDate = format(candidates[1].date, "MMMM do, yyyy H:mma");
    console.log(candidates[1].date);
    console.log(formattedDate);
  };

  const deleteCandidate = async (id) => {
    await axios.delete(`http://localhost:8080/candidates/${id}`);
    loadCandidates();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Content</th>
              <th scope="col">Respond</th>
              <th scope="col">Mail</th>
              <th scope="col">Date</th>
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
                <td>{candidate.content}</td>
                <td>{candidate.candidate_responded}</td>
                <td>{candidate.mail}</td>
                {/* TODO: Date Tarih gösterimi düzeltilecek */}
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
