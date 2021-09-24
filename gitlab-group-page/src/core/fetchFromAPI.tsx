import React from 'react';
<<<<<<< HEAD
import { fetchAPI } from './APIfunction';
export class FetchFromAPI extends React.Component {
=======

export class fetchFromAPI extends React.Component {
>>>>>>> abbfb55 ((#2) Wrote component to fetch data from API)
    state = {
        url: 'https://gitlab.stud.idi.ntnu.no/api/v4/projects/11911/',
        token: 'GSK4CqSZCdZGPz4NsAHw',
        loading: true,
<<<<<<< HEAD
        payload: {
                    'test': 1}
        }
=======
        payload: []
    }
    
>>>>>>> abbfb55 ((#2) Wrote component to fetch data from API)

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
<<<<<<< HEAD
        let data = await response.json();
        console.log(data)
=======
        let data = await response.json()
>>>>>>> abbfb55 ((#2) Wrote component to fetch data from API)
        this.setState({
            loading: false,
            payload: data
        })
<<<<<<< HEAD
        console.log(this.state.payload);
        const getElements = async () => {
            const test = await fetchAPI(11911, 'GSK4CqSZCdZGPz4NsAHw')
            console.log(test)
        }
        getElements();

=======
>>>>>>> abbfb55 ((#2) Wrote component to fetch data from API)
        //let data = await returnStatus(response.json())
        // .catch(error)
    }

    render() {
        const { loading, payload } = this.state;
<<<<<<< HEAD
        console.log(payload);
        console.log(typeof payload);
        const testList = [1, 2, 3, 4];
        const listItems = testList.map((item) => {
            return <li>{ item }</li>
        });
=======
>>>>>>> abbfb55 ((#2) Wrote component to fetch data from API)
		return (
			<div>
				{loading && <div>Loading...</div>}
                {!loading &&
                    <div >
<<<<<<< HEAD
                        <ul>
                            {listItems}
                        </ul>
                    </div>
                }
                <div>
                    <button onClick={this.getRepository}> Press me </button>
                </div>
=======
                        {payload[5]}
                    </div>
                }
>>>>>>> abbfb55 ((#2) Wrote component to fetch data from API)
			</div>
		);
	}
}
