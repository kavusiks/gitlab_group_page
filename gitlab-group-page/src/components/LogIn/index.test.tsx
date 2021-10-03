import React from 'react'
import LogIn from './index'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TestRenderer from 'react-test-renderer';

configure({adapter: new Adapter()});

describe('Login component', () => {
  let component

    beforeEach(() => {
        component = shallow(<LogIn />)
    })

    it('should fail if no credentials are provided', () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        const loginComponent = shallow(<LogIn />);
        expect(loginComponent.find('form').length).toBe(1);
        loginComponent.find('form').simulate('submit', fakeEvent);
    })

    it('renders correctly', () => {
        const tree = TestRenderer.create(<LogIn />).toJSON();
        expect(tree).toMatchSnapshot();
    })
      

    test('It should mount', () => {
        expect(component.length).toBe(1)
    })
})
