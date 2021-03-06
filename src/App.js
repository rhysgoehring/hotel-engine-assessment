import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchBar from './components/SearchBar/index';
import ResultTable from './components/ResultTable/index';
import { TableRow, LeftAlignedCell } from './components/ResultTable/styles';

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
  const [repos, setRepos] = useState([]);

  const fetchRepo = async searchTerm => {
    try {
      const { data } = await axios.post('/api/search', { searchTerm });
      setRepos(data);
    } catch (error) {
      console.log('error fetching repo', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRepo(query);
  }

  const renderTableData = () => {
    return repos && repos.map(repo => (
    <TableRow key={repo.id}>
      <LeftAlignedCell>{repo.name}</LeftAlignedCell>
      <LeftAlignedCell>{(repo.score).toFixed(2)}</LeftAlignedCell>
      <LeftAlignedCell>{repo.stargazers_count}</LeftAlignedCell>
      <LeftAlignedCell>{repo.language}</LeftAlignedCell>
      <td>{repo.owner.login}</td>
      <LeftAlignedCell>{repo.description}</LeftAlignedCell>
    </TableRow>
    ));
  }

  const handleSort = field => {
    const sortedData = repos.slice().sort((a, b) => {
      if (a[field] > b[field]) return -1;
      if (a[field] < b[field]) return 1;
      return 0;
    });
    setRepos(sortedData);
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
      <ResultTable
        tableData={renderTableData()}
        sortBy={(field) => handleSort(field)}
        />
    </>
  );
}

export default App;
