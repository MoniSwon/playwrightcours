import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import { act } from 'react-dom/test-utils';

jest.mock('axios');


test('renders MyComponent with mocked data', async () => {
    axios.get.mockResolvedValue({ data: {mock: 'Mocked Data' }});

    await act(() => {
    render(<App />);
  });


  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  // Vérifier que le composant rend correctement les données du mock
  expect(screen.queryByText(/Mocked Data/)).toBeInTheDocument();

});