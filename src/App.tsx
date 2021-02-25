import './styles.css';
import * as El from './styles';

export default function App() {
  return (
    <El.Wrap className='App'>
      <El.ToolMenu>操作栏</El.ToolMenu>
      <El.Content>
        <El.ColHeader></El.ColHeader>
        <El.RowHeader>col</El.RowHeader>
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>th1</th>
                  <th>th2</th>
                  <th>th3</th>
                </tr>
              </thead>
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
            </table>
          </div>
        </div>
      </El.Content>
      <El.SheetListRow>sheetlist</El.SheetListRow>
    </El.Wrap>
  );
}
