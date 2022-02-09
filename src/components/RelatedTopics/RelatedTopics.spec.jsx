import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';

import RelatedTopics from './RelatedTopics';

const topics = [
  {
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
  },
  {
    __typename: 'Topic',
    id: 'MDU6VG9waWNhbmd1bGFy',
    name: 'angular',
    stargazerCount: 39188,
    relatedTopics: [
      {
        __typename: 'Topic',
        id: 'MDU6VG9waWN2dWU=',
        name: 'vue',
        stargazerCount: 45009,
      },
    ],
  },
];

describe('<RelatedTopics />', () => {
  const setup = () => <RelatedTopics topics={topics} />;

  it('should render correctly', () => {
    render(setup());

    const element = screen.getByRole('heading', { name: /related topics/i });

    expect(element).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const component = create(setup());
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should dispatch setRelatedTopicId if topic is clicked', async () => {
    const dispatch = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockReturnValue([false, dispatch]);

    render(setup());

    const element = screen.getByText(new RegExp(topics[0].name, 'i'));

    expect(element).toBeInTheDocument();

    fireEvent.click(element);

    const calls = dispatch.mock.calls.flat();

    expect(calls.length).toBeGreaterThan(0);

    useStateSpy.mockRestore();
  });
});
