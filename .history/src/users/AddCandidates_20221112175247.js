import React from "react";

export default function AddCandidates() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md6 border rounded p-4 mt-3 shadow">
          <h2 text-center m-4>
            {" "}
            Add Candidate{" "}
          </h2>
          <div className="mb-3">
            
            
            <div class="row align-items-start p-4">
              <div class="col"><label htmlFor="Name" className="form-label">
              Name
            </label></div>
              <div class="col"><input
              type={"text"}
              className="form-control"
              placeholder="Enter the Candidates Name"
              name="name"
            ></input></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
