import React from 'react';
import { fetchAPI } from './APIfunction';
export class FetchFromAPI extends React.Component {
    state = {
        url: 'https://gitlab.stud.idi.ntnu.no/api/v4/projects/11911/',
        token: 'GSK4CqSZCdZGPz4NsAHw',
        loading: true,
        payload: {
                    'test': 1}
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
        let data = await response.json();
        console.log(data)
        this.setState({
            loading: false,
            payload: data
        })

        console.log(this.state.payload);
        const getElements = async () => {
            const test = await fetchAPI(11911, 'GSK4CqSZCdZGPz4NsAHw')
            console.log(test)
        }
        getElements();

        //let data = await returnStatus(response.json())
        // .catch(error)
    }

    render() {
        const { loading, payload } = this.state;
        console.log(payload);
        console.log(typeof payload);
        const testList = [1, 2, 3, 4];
        const listItems = testList.map((item) => {
            return <li>{ item }</li>
        });
		return (
			<div>
				{loading && <div>Loading...</div>}
                {!loading &&
                    <div >
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                }
                <div>
                    <button onClick={this.getRepository}> Press me </button>
                </div>
			</div>
		);
	}
}
