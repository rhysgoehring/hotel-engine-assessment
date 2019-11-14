import React from 'react';
import { PropTypes } from 'prop-types';
import { SearchBarWrapper,SearchInput, SearchButton } from './styles';

const SearchBar = ({ handleFormSubmit, handleInputChange }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <SearchBarWrapper>
        <SearchInput type='text' onChange={handleInputChange} />
        <SearchButton type='submit'>Search</SearchButton>
      </SearchBarWrapper>
    </form>

  );
};

SearchBar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SearchBar;