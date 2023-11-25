"use client";
import React, { useState } from 'react';
import { Select, SelectItem, Image,Input } from '@nextui-org/react';
import styles from "../../styles/styleop.module.css";

export default function Lectura(){
  const [direcciones] = useState([
    { id: 1, nombre: 'san jose' },
    { id: 2, nombre: 'asdassssd sdsdsd 2' },
    { id: 3, nombre: 'bsddaaa 3' },
    { id: 4, nombre: 'lo espejo 4' },
    { id: 5, nombre: 'manantiales 5' },
	{ id: 6, nombre: 'seco' },
    // Agrega más direcciones según sea necesario
  ]);

  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);
  const [selectedDirection, setSelectedDirection] = useState(null);

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagenPreview(previewURL);
    }

    setImagen(file);
  };

  const handleSelectChange = (value) => {
    setSelectedDirection(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Dirección seleccionada:', selectedDirection);
    console.log('Descripción:', descripcion);
    console.log('Imagen:', imagen);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.forum}>
      <label>
        Dirección:
        <Select
          value={selectedDirection}
          onChange={handleSelectChange}
          placeholder="Buscar dirección..."
        >
          {direcciones.map((direccion) => (
            <SelectItem key={direccion.id} value={direccion} she>
              {direccion.nombre}
            </SelectItem>
          ))}
        </Select>
      </label>

      <label>
        Observaciones:
        <textarea value={descripcion} onChange={handleDescripcionChange}></textarea>
      </label>

      <label>
        Imagen:
        <input type="file" accept="image/*" onChange={handleImagenChange} />
      </label>

      {imagenPreview && (
        <Image
          src={imagenPreview}
          alt="Preview de la imagen"
          style={{ maxWidth: '100%', marginTop: '10px' }}
        />
      )}

      <button type="submit">Enviar</button>
    </form>
  );
};