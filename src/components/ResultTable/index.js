import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { TableContainer, Table, SortButton, TableHeaderRow, LeftAlignedCell } from './styles';

const MinWidthTableHeader = styled.th`
  min-width: 100px;
  text-align: left;
`;

const ResultTable = ({ tableData, sortBy }) => {
  return (
    <TableContainer>
      <Table>
        <tbody>
          <TableHeaderRow>
            <th>Repo Name</th>
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