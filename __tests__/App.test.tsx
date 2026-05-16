import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

test('renders correctly', () => {
  let tree: ReactTestRenderer.ReactTestRenderer | undefined;

  ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<App />);
  });

  ReactTestRenderer.act(() => {
    tree?.unmount();
  });
});
