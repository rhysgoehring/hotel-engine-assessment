import React from 'react';
import { PropTypes } from 'prop-types';
import { TableContainer, Table, SortButton, TableHeaderRow, MinWidthTableHeader } from './styles';


const ResultTable = ({ tableData, sortBy }) => {
  return (
    <TableContainer>
      <Table>
        <tbody>
          <TableHeaderRow>
            <MinWidthTableHeader>Repo Name</MinWidthTableHeader>
            <MinWidthTableHeader>Score<SortButton onClick={() => sortBy('score')}>{'\u25be'}</SortButton></MinWidthTableHeader>
            <MinWidthTableHeader># of Stars<SortButton onClick={() => sortBy('stargazers_count')}>{'\u25be'}</SortButton></MinWidthTableHeader>
            <th>Language</th>
            <th>Owner</th>
            <MinWidthTableHeader>Description</MinWidthTableHeader>
          </TableHeaderRow>
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