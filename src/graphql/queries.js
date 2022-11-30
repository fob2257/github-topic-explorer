import { gql } from '@apollo/client';

export const getTopic = gql`
  query GetTopic($name: String!) {
    topic(name: $name) {
      id
      name
      stargazerCount
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
        relatedTopics(first: 10) {
          id
          name
          stargazerCount
        }
      }
    }
  }
`;
