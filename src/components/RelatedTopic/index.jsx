import React from 'react';

import { TopicDiv, TopicName, RelatedTopicsDiv, RelatedTopicName } from './styles';
import StargazerCount from '../StargazerCount';

const RelatedTopic = ({ topic, expanded, toggleRelatedTopic }) => {
  const handleTopicClick = () => toggleRelatedTopic(topic);

  return (
    <>
      <TopicDiv onClick={handleTopicClick} pointer>
        <TopicName>{topic.name}</TopicName>
        <StargazerCount count={topic.stargazerCount} />
      </TopicDiv>
      {expanded && (
        <RelatedTopicsDiv>
          {topic.relatedTopics.map((relatedTopic) => (
            <TopicDiv key={relatedTopic.id}>
              <RelatedTopicName>{relatedTopic.name}</RelatedTopicName>
              <StargazerCount count={relatedTopic.stargazerCount} />
            </TopicDiv>
          ))}
        </RelatedTopicsDiv>
      )}
    </>
  );
};

export default RelatedTopic;
