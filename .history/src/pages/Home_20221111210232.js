import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    loadCandidates();
  },[]);

  const loadCandidates = async () => {
    const result = await axios.get("http://localhost:8080/candidate/candidates");
    console.log(result.data);
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
