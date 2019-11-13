import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  border: 2px solid darkslategrey;
  width: 100%;
  margin: 0.75rem;
  padding: 0.5rem 0.5rem;
`;

const ResultTable = ({ tableData }) => {
  return (
    <Table>
      <tbody>
        <tr>
          <th>Repo Name</th>
          <th># of Stars</th>
          <th>Language</th>
          <th>Owner</th>
          <th>Description</th>
        </tr>
        {tableData}
      </tbody>
    </Table>
  );
};

export default ResultTable;