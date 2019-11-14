import React from 'react';
import { PropTypes } from 'prop-types';
import { TableContainer, Table, SortButton } from './styles';

const ResultTable = ({ tableData, sortBy }) => {
  return (
    <TableContainer>
      <Table>
        <tbody>
          <tr>
            <th>Repo Name</th>
            <th>Score<SortButton onClick={() => sortBy("score")}>{"\u25be"}</SortButton></th>
            <th style={{ minWidth: '100px' }}># of Stars<SortButton onClick={() => sortBy("stargazers_count")}>{"\u25be"}</SortButton></th>
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

ResultTable.propTypes = {
  sortBy: PropTypes.func.isRequired,
  tableData: PropTypes.any.isRequired,
};

export default ResultTable;