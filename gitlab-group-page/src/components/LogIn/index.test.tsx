import React from 'react'
import LogIn from './index'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TestRenderer from 'react-test-renderer';

configure({adapter: new Adapter()});

// Tests for LogIn component

describe('Login component', () => {
  let component

    beforeEach(() => {
        component = shallow(<LogIn />)
    })
//  Renders the component and checks if form is valid
    it('should fail if no credentials are provided', () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        const loginComponent = shallow(<LogIn />);
        expect(loginComponent.find('form').length).toBe(1);
        loginComponent.find('form').simulate('submit', fakeEvent);
    })
// Renders a snapshot of component if there is not one saved. Otherwise checks if snapshot is equal to component
    it('renders correctly', () => {
        const tree = TestRenderer.create(<LogIn />).toJSON();
        expect(tree).toMatchSnapshot();
    })
      
// Checks if component mounts
    test('It should mount', () => {
        expect(component.length).toBe(1)
    })
})
