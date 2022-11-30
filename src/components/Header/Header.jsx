import React, { useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';

import { Header as StyledHeader, IconDiv, Form, Input, SubmitButton } from './styles';

const Header = ({ initialValue = '', onSubmit = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue || '');

  const handleSearchOnChange = ({ target: { value } }) => setSearchTerm(value);
  const handleSearchOnSubmit = (e) => {
    e.preventDefault();

    onSubmit(searchTerm);
  };

  return (
    <StyledHeader>
      <IconDiv>
        <SearchIcon />
      </IconDiv>

      <Form aria-label="search form" onSubmit={handleSearchOnSubmit}>
        <Input
          aria-label="search input"
          placeholder="Search…"
          value={searchTerm}
          onChange={handleSearchOnChange}
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </StyledHeader>
  );
};

export default Header;
