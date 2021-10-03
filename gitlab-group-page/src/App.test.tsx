import React from 'react';
import App from "./App";
import TestRenderer from 'react-test-renderer';

// Testing snapshot-test. Just creates a snapshot if there is none saved from before. If snapshot of rendered component is equal to saved snapshot, test passes.

it('renders correctly', () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
