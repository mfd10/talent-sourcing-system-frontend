import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

export default function AddCandidates() {

    const [candidate, setCandidate]=useState({
        name:"",
        content:"",
        mail:"",
        respond:"",
        date:""
    })

    const{name,content,mail,respond,date} = candidate

    const onInputChange=(e)=>{
            setCandidate({...candidate,[e.target.name]:e.target.value})
    }

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
                  value={name}
                  onChange={(e)=>onInputChange(e)}
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
                  value={content}
                  onChange={(e)=>onInputChange(e)}
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
                  value={mail}
                  onChange={(e)=>onInputChange(e)}
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
                  name="respond"
                  value={respond}
                  onChange={(e)=>onInputChange(e)}
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
                  value={date}
                  onChange={(e)=>onInputChange(e)}
                ></input>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end col-18 mx-auto">
            <button type="submit" className="btn btn-success">
              ADD
            </button>
            <button type="submit" className="btn btn-danger me-md-2">
              CANCEL
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
