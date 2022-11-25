import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditInteractions() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [interaction, setInteractions, setID] = useState({
    type: "",
    candidateResponded: "",
    content: "",
    date: "",
    candidateID:""
  });

  const { type, candidateResponded, content, date, candidateID } = interaction;

  const onInputChange = (e) => {
    setInteractions({ ...interaction, [e.target.name]: e.target.value });

  };

  useEffect(() => {
    loadCandidate();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/api/v1/interactions/${id}`,
      interaction
    );
    navigate("/");
  };

    const loadCandidate = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/interactions/${id}`
    );
    setInteractions(result.data);
    interaction.candidateID=result.data.candidate.id;
    console.log(interaction.candidateID)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md6 border rounded p-4 mt-3 shadow">
          <h2 text-center="true">Edit Interaction</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-2">
              <div className="row align-items-start p-4">
                <div className="col">
                  <label htmlFor="Name" className="form-label">
                    Type
                  </label>
                </div>
                <div className="col">
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
              <div className="row align-items-start p-4">
                <div className="col">
                  <label htmlFor="Name" className="form-label">
                    Content
                  </label>
                </div>
                <div className="col">
                  <input
                    type={"mail"}
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
              <div className="row align-items-start p-4">
                <div className="col">
                  <label htmlFor="Name" className="form-label">
                    Candidate Responded
                  </label>
                </div>
                <div className="col">
                  <input
                    type={"boolean"}
                    className="form-control"
                    placeholder="contactInformation"
                    name="candidateResponded"
                    value={candidateResponded}
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
                    name="date"
                    value={date}
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end col-18 mx-auto">
              <button type="submit" className="btn btn-success" onClick={()=>console.log(interaction)}>
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
