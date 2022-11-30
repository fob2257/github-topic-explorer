import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import RelatedTopic from './RelatedTopic';

const topic = {
  __typename: 'Topic',
  id: 'MDU6VG9waWNyZWFjdC1uYXRpdmU=',
  name: 'react-native',
  stargazerCount: 22240,
  relatedTopics: [
    {
      __typename: 'Topic',
      id: 'MDU6VG9waWNyZWFjdGpz',
      name: 'reactjs',
      stargazerCount: 969,
    },
  ],
};

describe('<RelatedTopic />', () => {
  const setup = (props = { expanded: false, toggleRelatedTopic: () => {} }) => {
    return <RelatedTopic topic={topic} {...props} />;
  };

  it('should render correctly', () => {
    render(setup());

    const element = screen.getByText(new RegExp(topic.name, 'i'));

    expect(element).toBeInTheDocument();
  });

  it('should call toggleRelatedTopic', () => {
    let expanded = false;
    const toggleRelatedTopic = jest.fn(() => {
      expanded = !expanded;
    });

    render(setup({ expanded, toggleRelatedTopic }));

    const element = screen.getByText(new RegExp(topic.name, 'i'));

    fireEvent.click(element);

    const calls = toggleRelatedTopic.mock.calls.flat();

    expect(calls.length).toBeGreaterThan(0);
    expect(expanded).toBeTruthy();
  });

  it('should display related topics if is expanded', async () => {
    render(setup({ expanded: true }));

    const element = screen.getByText(new RegExp(topic.relatedTopics[0].name, 'i'));

    expect(element).toBeInTheDocument();
  });
});
