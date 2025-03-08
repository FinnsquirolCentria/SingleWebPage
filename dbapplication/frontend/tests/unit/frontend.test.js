import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides matchers like toBeInTheDocument
import App from '../../src/App';

global.fetch = jest.fn((url, options) => {
  if (url === "http://localhost:5000/users" && (!options || options.method === "GET")) {
    // Mock GET request
    return Promise.resolve({
      json: () => Promise.resolve({
        users: [
          { id: 1, name: "John Doe", email: "john.doe@example.com" },
          { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
        ],
      }),
    });
  }

  if (url === "http://localhost:5000/users" && options.method === "POST") {
    // Mock POST request
    return Promise.resolve();
  }

  if (url.startsWith("http://localhost:5000/users/") && options.method === "DELETE") {
    // Mock DELETE request
    return Promise.resolve();
  }

  return Promise.reject(new Error("Unknown API endpoint"));
});

test('renders the main heading', () => {
  render(<App />);
  const heading = screen.getByText(/User Management/i);
  expect(heading).toBeInTheDocument();
});

test('renders mocked user data', async () => {
  render(<App />);
  
  // Wait for the mock data to render
  const user1 = await screen.findByText("John Doe");
  const user2 = await screen.findByText("Jane Smith");

  expect(user1).toBeInTheDocument();
  expect(user2).toBeInTheDocument();
});