import React from 'react';
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

export default SearchBar;