import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ResultTable from './components/ResultTable';

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

  const fetchRepo = async searchTerm => {
    try {
      const response = await axios.post('/api/search', { searchTerm });
      console.log('response', response);
    } catch (error) {
      console.log('error fetching repo', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('query', query);
    fetchRepo(query);
  }

  const renderTableData = () => {
    return null;
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
      <ResultTable tableData={renderTableData()} />
    </>

  );
}

export default App;
