import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCandidate() {

    let navigate=useNavigate()

    const {id}=useParams()
     
  const [candidate, setCandidate] = useState({
    name: "",
    contactInformation: "",
    status: "",
  });

  const { name, contactInformation, status } = candidate;

  const onInputChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCandidate();
  }, []);

  const onSubmit= async (e) => {
        e.preventDefault(); 
        await axios.put(`http://localhost:8080/api/v1/candidates/${id}`, candidate)
        navigate("/")

  }
  const loadCandidate= async () => {
    const result= await axios.get(`http://localhost:8080/api/v1/candidates/${id}`);
    setCandidate(result.data);
  }


  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md6 border rounded p-4 mt-3 shadow">
          <h2 text-center="true">
            Edit Candidate
          </h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-2">
            <div className="row align-items-start p-4">
              <div className="col">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
              </div>
              <div className="col">
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the Candidates Name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <div className="row align-items-start p-4">
              <div className="col">
                <label htmlFor="Name" className="form-label">
                Contact Information
                </label>
              </div>
              <div className="col">
                <input
                  type={"mail"}
                  className="form-control"
                  placeholder="contactInformation"
                  name="contactInformation"
                  value={contactInformation}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <div className="row align-items-start p-4">
              <div className="col">
                <label htmlFor="Name" className="form-label">
                Candidate Status
                </label>
              </div>
              <div className="col">
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="status"
                  name="status"
                  value={status}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end col-18 mx-auto">
            <button type="submit" className="btn btn-success">
              EDİT
            </button>
            <Link className="btn btn-danger me-md-2" to="/">
              CANCEL
            </Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
