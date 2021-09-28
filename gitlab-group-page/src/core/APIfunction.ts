export type API = {
    error: boolean;
    loggedIn: boolean;
    // legg til flere felt her
};

export const fetchAPI = async ( id: number, token: string) => {
    let url = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${id}`;
    const response = await (await fetch(url, { // use state or props
        headers: {
                'Content-Type': 'application/json',
                'PRIVATE-TOKEN': token
            }
        })).json(); // use state or props
    return response.map((e: any) => e.id);
};