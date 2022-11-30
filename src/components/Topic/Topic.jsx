import React from 'react';

import { Card, CardDiv, TopicName, TopicID } from './styles';
import RelatedTopics from '../RelatedTopics/RelatedTopics';
import StargazerCount from '../StargazerCount/StargazerCount';

const Topic = ({ topic }) => (
  <Card>
    <CardDiv>
      <div>
        <TopicName>{topic.name}</TopicName>
        <TopicID>{topic.id}</TopicID>
      </div>

      <StargazerCount count={topic.stargazerCount} />
    </CardDiv>

    <RelatedTopics topics={topic.relatedTopics} />
  </Card>
);

export default Topic;
