import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


type State = {
    groupid: string,
    grouptoken: string,
    loading: boolean,
    message: string
};

export class Login extends Component<{}, State> {

    
      // render will know everything!
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicGroupID">
                    <Form.Label> Group-ID</Form.Label>
                    <Form.Control type="number" placeholder="Ex: 11911" />
                </Form.Group>
                <Form.Group>
                    
                </Form.Group>
            </Form>
        )
    }
}