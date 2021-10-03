import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../components/FormHook";

import { ProjectContext } from "../../context/ProjectContext";

import { fetchIssues, fetchLabels, fetchProject } from "../../core/APIfunction";
import "./index.css";
import image from "../../assets/img/teaser-gitlab-cover.png";

function LogIn() {
  const history = useHistory();

  useEffect(() => {
    if (
      !(localStorage.getItem("Group ID") === null) &&
      !(localStorage.getItem("Group Access Token") === null)
    ) {
      history.push("/labels");
    } else {
      history.push("/login");
    }
  });

  const { setId, setName, setDescription } = useContext(ProjectContext);

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
    localStorage.setItem("Group ID", Object(values)["groupid"]);
    localStorage.setItem("Group Access Token", Object(values)["grouptoken"]);

    const tempProjectData = await fetchProject(
      Object(values)["groupid"],
      Object(values)["grouptoken"]
    );
    setId(Object(values)["groupid"]);
    setName(tempProjectData.name);
    setDescription(tempProjectData.description);

    const tempLabelsData = await fetchLabels(
      Object(values)["groupid"],
      Object(values)["grouptoken"]
    );
    sessionStorage.setItem("Labels", tempLabelsData);
    const tempIssuesData = await fetchIssues(
      Object(values)["groupid"],
      Object(values)["grouptoken"]
    );
    sessionStorage.setItem("Issues", tempIssuesData);

    //sessionStorage.setItem("ProjectDescription", tempProjectData.description);

    if (tempProjectData.description != null && tempProjectData.name !== null)
      history.push("/labels");
  }

  return (
    <div className="body">
      <h1>Welcome to your Gitlab Group Page</h1>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col img-col">
              <img
                src={image}
                alt="Gitlab logo"
                width="40vh"
                height="20vh"
                className="login-image"
              />
            </div>
            <div className="col form-col">
              <form onSubmit={onSubmit}>
                <h2>Log in </h2>
                <div className="innercontainer">
                  <div className="form-group">
                    <div className="form-row">
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
                    <div className="form-row">
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
                    <div className="form-row">
                      <button type="submit" className="login-btn">
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
