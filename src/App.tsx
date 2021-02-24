import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>操作栏</div>
      <div>
        <div>
          <div>row</div>
          <div>col</div>
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
      </div>
      <div>sheetlist</div>
    </div>
  );
}
