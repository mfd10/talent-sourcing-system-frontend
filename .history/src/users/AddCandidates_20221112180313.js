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
          <div className="mb-2">
            <div class="row align-items-start p-4">
              <div class="col">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
              </div>
              <div class="col">
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the Candidates Name"
                  name="name"
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <div class="row align-items-start p-4">
              <div class="col">
                <label htmlFor="Name" className="form-label">
                  Content
                </label>
              </div>
              <div class="col">
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Content"
                  name="content"
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <div class="row align-items-start p-4">
              <div class="col">
                <label htmlFor="Name" className="form-label">
                  Mail
                </label>
              </div>
              <div class="col">
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="mail"
                  name="mail"
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <div class="row align-items-start p-4">
              <div class="col">
                <label htmlFor="Name" className="form-label">
                  Candidate Respond
                </label>
              </div>
              <div class="col">
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="DROPDOWN EKLENECEK"
                  name="name"
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <div class="row align-items-start p-4">
              <div class="col">
                <label htmlFor="Name" className="form-label">
                  Date
                </label>
              </div>
              <div class="col">
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="TARİH  ŞEKLİ EKLENECEK"
                  name="date"
                ></input>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 row-2 mx-auto">
            {" "}
            <button type="submit" className="btn btn-success">
              ADD
            </button>
            <button type="submit" className="btn btn-success">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
