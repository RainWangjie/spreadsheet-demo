import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const ToolMenu = styled.div`
  height: 64px;
  box-shadow: 0 2px 2px 0 #0007;
  background: #3493;
`;

export const Content = styled.div`
  height: calc(100vh - 80px -100px);
  overflow: hidden;
`;

export const RowHeader = styled.div`
  width: 20px;
  height: 100%;
`;

export const ColHeader = styled.div`
  height: 20px;
`;

export const SheetListRow = styled.div`
  height: 40px;
  background: #3493;
`;

export const Table = styled.table`
  border: 1px solid #444;
  border-spacing: 0;
  tr {
    border-bottom: 1px solid #444;
    &:last-child {
      td,
      th {
        border-bottom: 0;
      }
    }
    td:last-child,
    th:last-child {
      border-right: 0;
    }
  }
  td,
  th {
    border-right: 1px solid #444;
    border-bottom: 1px solid #444;
    padding: 4px;
  }
`;
