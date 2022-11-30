import React from 'react';
import { Star as StarIcon } from '@mui/icons-material';

import { StarCountDiv, StarCount } from './styles';

const StargazerCount = ({ count }) => (
  <StarCountDiv>
    <StarIcon />
    <StarCount>{count}</StarCount>
  </StarCountDiv>
);

export default StargazerCount;
