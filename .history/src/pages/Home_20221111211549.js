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
              <th scope="col">Name</th>
              <th scope="col">Content</th>
              <th scope="col">Respond</th>
              <th scope="col">Mail</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
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
              {/* TODO: Date Tarih gösterimi düzeltilecek */} 
              <td>{candidate.date}</td>
              <td>
                <button className="btn btn-primary mx-3"></button>
                <button className="btn btn-outline-primary mx-3"></button>
                <button className="btn btn-primary mx-3"></button>
              </td>
            </tr>
            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
}
