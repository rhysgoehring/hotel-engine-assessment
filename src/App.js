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
  const [repos, setRepos] = useState([]);

  const fetchRepo = async searchTerm => {
    try {
      const { data } = await axios.post('/api/search', { searchTerm });
      console.log('response', data);
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
    return repos.map(repo => (
    <tr key={repo.id}>
      <td>{repo.name}</td>
      <td>{repo.score}</td>
      <td>{repo.stargazers_count}</td>
      <td>{repo.language}</td>
      <td>{repo.owner.login}</td>
      <td>{repo.description}</td>
    </tr>
    ));
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
