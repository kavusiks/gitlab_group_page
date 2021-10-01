
export const fetchProject = async ( id: number, token: string) => {
    let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}`;
    const response = await (await fetch(url, { // use state or props
        headers: {
                'Content-Type': 'application/json',
                'PRIVATE-TOKEN': token
            }
        })).json();
    return response; //TODO: reduce
};

export const fetchCommits = async (id: number, token: string) => {
    let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}/repository/commits`;
    const response = await (await fetch(url, { // use state or props
        headers: {
                'Content-Type': 'application/json',
                'PRIVATE-TOKEN': token
            }
        })).json(); 
    return JSON.stringify(response);
};
