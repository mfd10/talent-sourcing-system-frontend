import axios from "axios";
import { id } from "date-fns/locale";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddInteractions() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [candidate, setCandidate] = useState({
    type: "",
    content: "",
    mail: "",
    candidateResponded: "",
    date: "",
    candidateId: id,
  });

  const { type, content, candidateResponded, date, candidateId } = candidate;

  const onInputChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/interactions", candidate);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md6 border rounded p-4 mt-3 shadow">
          <h2 text-center m-4>
            Add Candidate
          </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-2">
              <div class="row align-items-start p-4">
                <div class="col">
                  <label htmlFor="Name" className="form-label">
                    Type
                  </label>
                </div>
                <div class="col">
                  <input
                    type="radio"
                    id="1"
                    className="form-check-input mx-2"
                    name="type"
                    value="PHONE"
                    onChange={(e) => onInputChange(e)}
                  ></input>
                  <label class="form-check-label" for="1">
                    Phone
                  </label>

                  <input
                    type="radio"
                    id="2"
                    className="form-check-input mx-2"
                    name="type"
                    value="MAIL"
                    onChange={(e) => onInputChange(e)}
                  ></input>
                  <label class="form-check-label" for="2">
                    Mail
                  </label>
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
                    onChange={(e) => onInputChange(e)}
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
                  <select name="candidateResponded" id="selectList" onChange={(e) => onInputChange(e)}>
                      <option value="true" defaultValue={"true"}>YES</option> 
                    <option value="false">NO </option>
                  </select>
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
            <div class="d-grid gap-2 d-md-flex justify-content-md-end col-18 mx-auto">
              <button type="submit" className="btn btn-success">
                ADD
              </button>
              <button type="submit" className="btn btn-danger me-md-2">
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
