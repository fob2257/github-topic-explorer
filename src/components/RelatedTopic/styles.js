import styled, { css } from 'styled-components';

export const TopicDiv = styled.div`
  margin: 8px 0;

  display: flex;
  justify-content: space-between;

  ${({ pointer }) => {
    if (pointer) {
      return css`
        cursor: pointer;
      `;
    }
  }}
`;

export const TopicName = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
`;

export const RelatedTopicsDiv = styled.div`
  margin: 4px 0px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 2px;
`;

export const RelatedTopicName = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
`;
