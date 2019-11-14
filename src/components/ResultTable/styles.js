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

const TableHeaderRow = styled.tr`
  border-bottom: 2px solid darkslategrey;
  padding: 2.5rem 2.5rem;
  vertical-align: middle;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid darkslategrey;
`;

const LeftAlignedCell = styled.td`
  text-align: left;
`;

export {
  TableContainer,
  Table,
  SortButton,
  TableHeaderRow,
  TableRow,
  LeftAlignedCell,
}