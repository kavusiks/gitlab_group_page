import React from 'react';

export class FetchFromAPI extends React.Component {
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
        console.log(this.state.payload);
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
                <div>
                    <button onClick={this.getRepository}>Press me </button>
                </div>
			</div>
            
		);
	}
}
