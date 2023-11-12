import React, { useState } from 'react';
import styles from '../styles/styleop.module.css';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,ScrollShadow, Image} from '@nextui-org/react';

const DataTable = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Table aria-label="Tabla de Datos">
        <TableHeader>
          <TableColumn>Dirección</TableColumn>
          <TableColumn>Trabajador</TableColumn>
          <TableColumn>Tipo</TableColumn>
          <TableColumn>Estado</TableColumn>
          <TableColumn>Fecha</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} onClick={() => handleRowClick(item)}>
              <TableCell>{item.Direccion}</TableCell>
              <TableCell>{item.Trabajador}</TableCell>
              <TableCell>{item.Tipo}</TableCell>
              <TableCell>{item.Estado}</TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedItem && (
        <div className={styles.boxout}>
          <Image
            isZoomed
            width={240}
            src={selectedItem.Imagen}
          />
          <ScrollShadow hideScrollBar className="w-[200px] h-[200px]">
            <p>{selectedItem.Descripcion}</p>
            </ScrollShadow>
        </div>

      )}
    </div>
  );
};

export default DataTable;
