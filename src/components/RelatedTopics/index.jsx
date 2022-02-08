import React, { useState } from 'react';

import { RelatedTopicsDiv, Heading } from './styles';
import RelatedTopic from '../RelatedTopic';

const RelatedTopics = ({ topics }) => {
  const [relatedTopicId, setRelatedTopicId] = useState(null);

  const toggleRelatedTopic = (topic) => {
    setRelatedTopicId(topic.id === relatedTopicId ? null : topic.id);
  };

  return (
    <RelatedTopicsDiv>
      <Heading>Related topics: {topics.length}</Heading>
      {topics.map((topic) => (
        <RelatedTopic
          key={topic.id}
          topic={topic}
          expanded={topic.id === relatedTopicId}
          toggleRelatedTopic={toggleRelatedTopic}
        />
      ))}
    </RelatedTopicsDiv>
  );
};

export default RelatedTopics;
