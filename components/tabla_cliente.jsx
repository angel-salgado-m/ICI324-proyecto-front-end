'use client';
import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function Clientlist() {
  const [client, setClient] = useState([]);

  useEffect(() => {
    const consultaAPI = async () => {
      const url = 'http://localhost:3030/cliente/allClientes'; // Reemplaza con la URL correcta de tu API
      const respuesta = await fetch(url);
      if (respuesta.ok) {
        const data = await respuesta.json();
        const clientes = data.clientes; // Accede a la propiedad 'usuarios'
        setClient(clientes);
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
          <TableColumn>ID Cliente</TableColumn>
          <TableColumn>Nombre</TableColumn>
        </TableHeader>
        <TableBody>
          {client.map((user) => ( // Itera sobre 'client', que es la matriz de usuarios
            <TableRow key={user.idCliente}>
              <TableCell>{user.idCliente}</TableCell>
              <TableCell>{user.nombre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}