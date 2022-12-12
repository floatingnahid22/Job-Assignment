import React, { useEffect, useState, useMemo } from "react";
import { COLUMNS } from "./columns";
import axios from "axios";
import { useTable, useSortBy, usePagination } from "react-table";
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
  const {
    getTableProps,
    getTableBodyProps,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state,
    setPageSize,
    headerGroups,
    prepareRow,
  } = useTable(
    {
      columns,
      data: myData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " ↓" : " ↑") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
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
      <div className="footer">
        Rows per page:
        <select
          className="rows_per_page"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <span>
          <strong>
            {pageIndex + 1} of {data.length}
          </strong>{" "}
        </span>
        <button
          className="next_prev"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </button>{" "}
        <button
          className="next_prev"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </button>{" "}
      </div>
    </>
  );
};
