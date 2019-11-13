import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  border: 2px solid darkslategrey;
  width: 100%;
  margin: 0.75rem;
  padding: 0.5rem 0.5rem;
  font-family: 'Helvetica Neue';
  /* font-size: 1.5rem; */
`;

const SortButton = styled.button`
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ResultTable = ({ tableData, sortBy }) => {
  return (
    <TableContainer>
      <Table>
        <tbody>
          <tr>
            <th>Repo Name</th>
            <th>Score<SortButton onClick={() => sortBy("score")}>{"\u25be"}</SortButton></th>
            <th># of Stars<SortButton onClick={() => sortBy("stargazers_count")}>{"\u25be"}</SortButton></th>
            <th>Language</th>
            <th>Owner</th>
            <th>Description</th>
          </tr>
          {tableData}
        </tbody>
      </Table>
    </TableContainer>

  );
};

export default ResultTable;