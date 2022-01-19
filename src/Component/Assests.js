import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
let gridRow = {};

const AssetsTableRow = (rows) => {
  return Object.keys(gridRow).map((d, id) => (
    <tr key={id}>
      <td>{gridRow[d].asset}</td>
      <td>{gridRow[d].reading}</td>
      <td>{gridRow[d].maxReading}</td>
    </tr>
  ));
};

export default function Assests() {
  const [rows, setRows] = useState([]);

  const calculateRows = (rows) => {
    rows.reduce((acc, d, i, arr) => {
      if (gridRow[d.asset] && gridRow[d.asset].timeStamp) {
        var date1 = new Date(gridRow[d.asset].timeStamp);
        var date2 = new Date(d.timeStamp);

        if (date1.getTime() < date2.getTime()) {
          gridRow[d.asset] = d;
        }
        if (parseFloat(d.reading) > parseFloat(gridRow[d.asset].reading)) {
          gridRow[d.asset]["maxReading"] = d.reading;
        }
        return gridRow;
      } else {
        gridRow[d.asset] = d;
      }
      return gridRow;
    }, gridRow);

    console.log(gridRow);
  };

  useEffect(() => {
    fetch("http://localhost:3001/assets")
      .then((res) => res.json())
      .then((res) => {
        calculateRows(res);
        setRows((arr) => [...arr, ...res]);
      });
  }, []);

  return (
    <Table striped >
      <thead>
        <tr>
          <th>Asset</th>
          <th>Output</th>
          <th>Max. Output</th>
        </tr>
      </thead>
      <tbody>{AssetsTableRow(rows)}</tbody>
    </Table>
  );
}
