import React, { useEffect, useState, useMemo } from "react";
import { COLUMNS } from "./columns";
import axios from "axios";
import { useTable } from "react-table";
import "./table.css";

export const BasicTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/db/dessert_data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        //console.log(err);
        alert("No Data To Show");
      });
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const myData = useMemo(() => data, [data]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: myData,
    });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
