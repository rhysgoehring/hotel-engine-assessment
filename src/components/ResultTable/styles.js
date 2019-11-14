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
`;

const SortButton = styled.button`
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const TableHeaderRow = styled.tr`
  border-bottom: 2px solid darkslategrey;
  vertical-align: middle;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid darkslategrey;
  vertical-align: middle;
`;

const LeftAlignedCell = styled.td`
  text-align: left;
  padding: 1rem 1rem;
`;

const MinWidthTableHeader = styled.th`
  min-width: 100px;
  text-align: left;
  padding: 1rem 1rem;
  vertical-align: middle;
`;

export {
  TableContainer,
  Table,
  SortButton,
  TableHeaderRow,
  TableRow,
  LeftAlignedCell,
  MinWidthTableHeader
};