import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import Topic from './Topic';

const topic = {
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
};

describe('<Topic />', () => {
  const setup = () => <Topic topic={topic} />;

  it('should render correctly', () => {
    render(setup());

    const element = screen.getByRole('heading', { name: new RegExp(topic.name, 'i') });

    expect(element).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const component = create(setup());
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
