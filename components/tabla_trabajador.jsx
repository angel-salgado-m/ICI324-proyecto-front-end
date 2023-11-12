'use client';
import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function Workerslist() {
  const [worker, setworker] = useState([]);

  useEffect(() => {
    const consultaAPI = async () => {
      const url = 'http://localhost:3030/trabajador/allTrabajadores'; // Reemplaza con la URL correcta de tu API
      const respuesta = await fetch(url);
      if (respuesta.ok) {
        const data = await respuesta.json();
        const trabajadores = data.trabajadores; // Accede a la propiedad 'usuarios'
        setworker(trabajadores);
        console.log(trabajadores);
      } else {
        console.error('Error al obtener datos de la API');
      }
    };

    consultaAPI();
  }, []);

  return (
    <div>
      <Table aria-label="Lista de Trabajadores">
        <TableHeader>
          <TableColumn>RUT</TableColumn>
          <TableColumn>ID Sector</TableColumn>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Cargo</TableColumn>
          <TableColumn>Horario</TableColumn>
        </TableHeader>
        <TableBody>
          {worker.map((user) => ( // Itera sobre 'client', que es la matriz de usuarios
            <TableRow key={user.rut}>
              <TableCell>{user.rut}</TableCell>
              <TableCell>{user.idSectores}</TableCell>
              <TableCell>{user.nombre}</TableCell>
              <TableCell>{user.cargo}</TableCell>
              <TableCell>{user.horario}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}