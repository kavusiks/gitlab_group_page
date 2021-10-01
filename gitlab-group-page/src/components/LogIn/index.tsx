import React from "react";
import { useForm } from "../../context/FormHook";
import { fetchProject } from "../../core/APIfunction";
import "./index.css";

function LogIn() {
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
    const temp = await fetchProject(
      Object(values)["groupid"],
      Object(values)["grouptoken"]
    );
    //temp kan lagres om en vil- jsonobjekt
    localStorage.setItem("Group Information", JSON.stringify(values));
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
