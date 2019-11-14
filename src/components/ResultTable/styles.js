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

export {
  TableContainer,
  Table,
  SortButton
}