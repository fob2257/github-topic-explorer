import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { TopicDiv, Heading, SecondaryHeading } from './styles';
import Header from '../../components/Header/Header';
import Topic from '../../components/Topic/Topic';

import { getTopic } from '../../graphql/queries';

const TopicsPage = () => {
  const [term, setTerm] = useState('react');
  const { loading, error, data } = useQuery(getTopic, { variables: { name: term } });

  return (
    <>
      <Heading>Topic</Heading>
      <Header initialValue={term} onSubmit={setTerm} />
      <TopicDiv>
        {loading ? (
          <SecondaryHeading>Loading...</SecondaryHeading>
        ) : error || !data?.topic ? (
          <SecondaryHeading>Error...</SecondaryHeading>
        ) : (
          <Topic topic={data.topic} />
        )}
      </TopicDiv>
    </>
  );
};

export default TopicsPage;
