import React from "react";

function TableComponent({ headers, data }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, cellIndex) => (
              <td key={cellIndex}>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;

//여기에는 추후 받아온 테이블 데이터를 랜더링 해줘야합니다.
