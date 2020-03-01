import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import App from './App';

describe('App Component', () => {

  test('Test Deep App Render', () => {

    const mockStore = configureStore([]);
    const store = mockStore({});

    // Test component renders successfully
    render(<Provider store={store}><App /></Provider>);
  })

});