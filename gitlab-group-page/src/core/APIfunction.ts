/**
 *
 * @param id groupId
 * @param token accessToken
 * @returns the JSON response
 */
export const fetchProject = async (id: number, token: string) => {
  let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}`;
  const response = await (
    await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-TOKEN": token,
      },
    })
  ).json();
  return response;
};

/**
 *
 * @param id groupId
 * @param token accessToken
 * @returns Stringifies JSON-object
 */
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
  //return response;
  return JSON.stringify(response);
};

/**
 *
 * @param id groupId
 * @param token accessToken
 * @returns Stringifies JSON-object
 */
export const fetchIssues = async (id: number, token: string) => {
  let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}/issues`;
  const response = await (
    await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-TOKEN": token,
      },
    })
  ).json();

  return JSON.stringify(response);
};
