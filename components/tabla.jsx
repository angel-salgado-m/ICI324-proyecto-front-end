'use client';
import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";
import styles from '../styles/styleop.module.css';

export default function Listar({ columns, data }) {
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);

  useEffect(() => {
    // Actualiza los datos de la tabla cuando cambia la prop 'data'
    setTableData(data);
  }, [data]);

  return (
    <div className={styles.bloquetable}>
      <Table 
        aria-label="Lista"
        className={styles.table}
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader>
          {Object.keys(columns).map((column) => (
            <TableColumn key={column}>{columns[column]}</TableColumn>
          ))}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={Object.values(item).join('-')}>
              {Object.keys(columns).map((column) => (
                <TableCell key={column}>{item[column]}</TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
