import './styles.css';
import { ISheetOption } from './type';
import * as El from './styles';

const initialCellData: ISheetOption['cellData'] = [
  [
    {
      cellType: {
        fa: '*',
        t: 'number',
      },
      monitor: '12',
      value: 12,
      mergeCell: {
        r: 2,
        c: 2,
      },
    },
    {
      cellType: {
        fa: '*',
        t: 'number',
      },
      monitor: '12',
      value: 12,
      mergeCell: {
        r: 2,
        c: 2,
      },
    },
  ],
  [
    {
      cellType: {
        fa: '*',
        t: 'number',
      },
      monitor: '12',
      value: 12,
      mergeCell: {
        r: 2,
        c: 2,
      },
    },
    {
      cellType: {
        fa: '*',
        t: 'number',
      },
      monitor: '12',
      value: 12,
      mergeCell: {
        r: 2,
        c: 2,
      },
    },
  ],
  [
    {
      cellType: {
        fa: '*',
        t: 'number',
      },
      monitor: '12',
      value: 12,
      mergeCell: {
        r: 2,
        c: 2,
      },
    },
    {
      cellType: {
        fa: '*',
        t: 'number',
      },
      monitor: '12',
      value: 12,
      mergeCell: {
        r: 2,
        c: 2,
      },
    },
    {
      cellType: {
        fa: '*',
        t: 'number',
      },
      monitor: '12',
      value: 12,
      mergeCell: {
        r: 2,
        c: 2,
      },
    },
  ],
];

export default function App() {
  return (
    <El.Wrap className='App'>
      <El.ToolMenu>操作栏</El.ToolMenu>
      <El.Content>
        <El.ColHeader></El.ColHeader>
        <El.RowHeader>col</El.RowHeader>
        <div>
          <div>
            <El.Table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </El.Table>
          </div>
        </div>
      </El.Content>
      <El.SheetListRow>sheetlist</El.SheetListRow>
    </El.Wrap>
  );
}
