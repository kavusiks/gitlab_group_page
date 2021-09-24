import React from 'react';

export class fetchFromAPI extends React.Component {
    state = {
        url: 'https://gitlab.stud.idi.ntnu.no/api/v4/projects/11911/',
        token: 'GSK4CqSZCdZGPz4NsAHw',
        loading: true,
        payload: []
    }
    

    /*
    returnStatus(response) {
        if (response.status == 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    }
    */

    getRepository = async () => {
        let response = await fetch(this.state.url, { // use state or props
                headers: {
                        'Content-Type': 'application/json',
                        'PRIVATE-TOKEN': this.state.token
                    }
                }) // use state or props
        let data = await response.json()
        this.setState({
            loading: false,
            payload: data
        })
        //let data = await returnStatus(response.json())
        // .catch(error)
    }

    render() {
        const { loading, payload } = this.state;
		return (
			<div>
				{loading && <div>Loading...</div>}
                {!loading &&
                    <div >
                        {payload[5]}
                    </div>
                }
			</div>
		);
	}
}
