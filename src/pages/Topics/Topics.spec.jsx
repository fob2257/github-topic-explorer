/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import TopicsPage from './Topics';

import { getTopic } from '../../graphql/queries';

const name = 'react';
const topic = {
  id: 'MDU6VG9waWNyZWFjdA==',
  name,
  stargazerCount: 65538,
  relatedTopics: [
    {
      id: 'MDU6VG9waWNhbmd1bGFy',
      name: 'angular',
      stargazerCount: 39188,
      relatedTopics: [
        {
          id: 'MDU6VG9waWNyZWFjdA==',
          name: 'python',
          stargazerCount: 65538,
        },
      ],
    },
  ],
};

const getMockObj = (
  obj = {
    result: {
      data: {
        topic,
      },
    },
  }
) => ({
  request: {
    query: getTopic,
    variables: {
      name,
    },
  },
  ...obj,
});

describe('<TopicsPage />', () => {
  const setup = (props = {}) => (
    <MockedProvider mocks={[]} addTypename={false} {...props}>
      <TopicsPage />
    </MockedProvider>
  );

  it('should render correctly', () => {
    render(setup());

    const element = screen.getByText(/loading/i);

    expect(element).toBeInTheDocument();
  });

  it('should render topic name', async () => {
    render(setup({ mocks: [getMockObj()] }));

    const element = await screen.findByText(new RegExp(name, 'i'));

    expect(element).toBeInTheDocument();
  });

  it('should render error header', async () => {
    render(setup({ mocks: [getMockObj({ error: new Error('An error occurred') })] }));

    const element = await screen.findByText(/error/i);

    expect(element).toBeInTheDocument();
  });
});
