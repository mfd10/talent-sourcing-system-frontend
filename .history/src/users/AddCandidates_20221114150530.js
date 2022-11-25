import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCandidates() {
  let navigate = useNavigate();

  const [candidate, setCandidate] = useState({
    name: "",
    content: "",
    mail: "",
    respond: "",
    date: "",
  });

  const { name, content, mail, respond, date } = candidate;

  const onInputChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/add", candidate);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md6 border rounded p-4 mt-3 shadow">
          <h2 text-center="true">Add Candidate</h2>
          <form onSubmit={(e) => onSubmit(e)}>
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
                    Content
                  </label>
                </div>
                <div className="col">
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Content"
                    name="content"
                    value={content}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
              </div>
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </div>
            <div className="mb-2">
              <div className="row align-items-start p-4">
                <div className="col">
                  <label htmlFor="Name" className="form-label">
                    Mail
                  </label>
                </div>
                <div className="col">
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="mail"
                    name="mail"
                    value={mail}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="row align-items-start p-4">
                <div className="col">
                  <label htmlFor="Name" className="form-label">
                    Candidate Respond
                  </label>
                </div>
                <div className="col">
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="DROPDOWN EKLENECEK"
                    name="respond"
                    value={respond}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="row align-items-start p-4">
                <div className="col">
                  <label htmlFor="Name" className="form-label">
                    Date
                  </label>
                </div>
                <div className="col">
                  <input
                    type={"date"}
                    className="form-control"
                    placeholder="TARİH  ŞEKLİ EKLENECEK"
                    name="date"
                    value={date}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end col-18 mx-auto">
              <button type="submit" className="btn btn-success">
                ADD
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
