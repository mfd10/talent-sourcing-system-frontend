import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    loadCandidates();
  },[]);

  const loadCandidates = async () => {
    const result = await axios.get("http://localhost:8080/candidate/candidates");
    setCandidates(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
           {
            candidates.map((candidate, index)=>(
              <tr>
              <th scope="row" key={index}>{index+1}</th>
              <td>{candidate.name}</td>
              <td>{candidate.content}</td>
              <td>{candidate.candidate_responded}</td>
              <td>{candidate.mail}</td>
              <td>{candidate.date.format('YYYY-MM-DD')}</td>
            </tr>
            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
}
