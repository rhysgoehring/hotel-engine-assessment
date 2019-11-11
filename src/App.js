import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';

const Header = styled.header`
  text-align: center;
  height: 3.5rem;
  padding: 1.75rem;
  background-color: darkslategrey;
  color: white;
  border-bottom: 2px solid black;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
`;


function App() {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('query', query);
  }
  return (
    <>
      <Header>
        <Heading>Hotel Engine Assessment</Heading>
      </Header>
      <SearchBar
        handleFormSubmit={handleSubmit}
        handleInputChange={(e) => setQuery(e.target.value)}
      />
    </>

  );
}

export default App;
