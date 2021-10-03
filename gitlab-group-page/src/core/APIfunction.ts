export const fetchProject = async (id: number, token: string) => {
  let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}`;
  const response = await (
    await fetch(url, {
      // use state or props
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-TOKEN": token,
      },
    })
  ).json();
  return response; //TODO: reduce
};

export const fetchLabels = async (id: number, token: string) => {
  let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}/labels`;
  const response = await (
    await fetch(url, {
      // use state or props
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-TOKEN": token,
      },
    })
  ).json();
  return response;
  //return JSON.stringify(response);
};

export const fetchCommits = async (id: number, token: string) => {
  let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}/repository/commits`;
  const response = await (
    await fetch(url, {
      // use state or props
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-TOKEN": token,
      },
    })
  ).json();
  return JSON.stringify(response);
};

export const fetchIssues = async (id: number, token: string) => {
  let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}/issues`;
  const response = await (
    await fetch(url, {
      // use state or props
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-TOKEN": token,
      },
    })
  ).json();
  return JSON.stringify(response);
};

export const fetchHistory = async (id: number, token: string) => {
  let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}/events`;
  const response = await (
    await fetch(url, {
      // use state or props
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-TOKEN": token,
      },
    })
  ).json();
  return JSON.stringify(response);
};
