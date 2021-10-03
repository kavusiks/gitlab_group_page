import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { useForm } from "../../context/FormHook";
import { ProjectContext } from "../../context/ProjectContext";

import { fetchProject } from "../../core/APIfunction";
import "./index.css";

function LogIn() {
  const { id, setId, name, setName, description, setDescription } =
    useContext(ProjectContext);
  const history = useHistory();

  const initialState = {
    groupid: 0,
    grouptoken: "",
  };

  // eslint-disable-next-line
  const { onChange, onSubmit, values } = useForm(
    loginUserCallBack,
    initialState
  );

  async function loginUserCallBack() {
    console.log("Før");
    console.log(id);
    console.log(name);
    console.log(description);
    const temp = await fetchProject(
      Object(values)["groupid"],
      Object(values)["grouptoken"]
    );
    //temp kan lagres om en vil- jsonobjekt
    localStorage.setItem("Group Information", JSON.stringify(values));
    localStorage.setItem("id", Object(values)["groupid"]);
    localStorage.setItem("token", Object(values)["grouptoken"]);
    setId(Object(values)["groupid"]);
    setName(temp.name);
    setDescription(temp.description);
    console.log("Etter");
    console.log(initialState.groupid);
    console.log(name);
    console.log(description);

    if (temp.description != null && temp.name !== null) history.push("/labels");
  }

  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <div className="innercontainer">
          <h1> Welcome to your Gitlab Group Page </h1>
          <div className="form-group">
            <div className="row">
              <div className="col-left">
                <label htmlFor="groupid" id="group-id">
                  Group-ID
                </label>
              </div>
              <div className="col-right">
                <input
                  name="groupid"
                  id="groupid"
                  type="number"
                  placeholder="Ex: 11911"
                  onChange={onChange}
                  required
                  min="1"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-left">
                <label htmlFor="grouptoken" id="group-token">
                  Group Access Token
                </label>
              </div>
              <div className="col-right">
                <input
                  name="grouptoken"
                  id="grouptoken"
                  type="text"
                  placeholder="Ex: xxGWKwsM1A6MHobbwDey"
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
