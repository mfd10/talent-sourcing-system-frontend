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
                <button className="btn btn-primary mx-2">View</button>
                <button className="btn btn-outline-primary mx-2">Edit</button>
                <button className="btn btn-danger mx-2">Delete</button>
              </td>
            </tr>
            ))
           }
          </tbody>
        </table>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
      </div>
    </div>
  );
}
