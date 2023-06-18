import React, { useEffect, useState } from "react";
import axios from "axios";
function TableComponent({}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://3.37.241.210:8080/member/members"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.username}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
    /*<table>
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
    </table> */
  );
}

export default TableComponent;

//여기에는 추후 받아온 테이블 데이터를 랜더링 해줘야합니다.
