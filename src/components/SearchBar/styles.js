import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`;

const SearchInput = styled.input`
  margin: 0.75rem;
  padding: 0.5rem 0.5rem;
  color: black;
  font-size: 1.5rem;
  flex: 1 1 75%;
  border: 2px solid darkslategrey;
`;

const SearchButton = styled.button`
  background: transparent;
  text-align: center;
  color: black;
  padding: 0.5rem 0.5rem;
  margin: 0.75rem;
  font-size: 1.5rem;
  transition: all 0.5s ease;
  flex: 1 1 20%;
  border: 2px solid darkslategrey;

  &:hover {
    background: darkslategrey;
    color: white;
  }
`;

export {
  SearchBarWrapper,
  SearchInput,
  SearchButton
}