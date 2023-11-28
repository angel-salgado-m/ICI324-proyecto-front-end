"use client";
import React, { useState, useEffect } from 'react';
import { Select, SelectItem, Image, Input, Button } from '@nextui-org/react';
import styles from "../../styles/styleop.module.css";
const backendUrl = 'http://localhost:3030';
const bdtype = 'sql';
export default function Lectura({ direcciones }) {
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);
  const [selectedDirection, setSelectedDirection] = useState(null);
  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };
  console.log(direcciones);
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

  const handleSubmit = async () => {
    if (!selectedDirection) {
      alert('Por favor, selecciona una dirección.');
      return;
    }
    const formData = new FormData();
    formData.append('idDireccion', selectedDirection.target.value);
    formData.append('tipo', 'Revision');
    formData.append('estado', 'uncheck');
    formData.append('descripcion', descripcion);
    formData.append('fecha', new Date().toISOString());
    formData.append('image', imagen);
    try {
      const response = await fetch(`${backendUrl}/registro/addReg/${bdtype}`,{
        method: 'POST',
        body: formData,
      });

      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        alert('Datos enviados exitosamente.');
      } else {
        alert('Error al enviar los datos. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Se produjo un error al enviar los datos. Por favor, inténtalo más tarde.');
    }
  };

  return (
    <form className={styles.forum}>
      <label>
        Dirección:
        <Select
          aria-label="direccion"
          aria-labelledby="direccion"
          value={selectedDirection}
          onChange={handleSelectChange}
          placeholder="Buscar dirección..."
        >
          {direcciones.map((direccion) => (
            <SelectItem key={direccion.id} value={direccion}>
              {direccion.name}
            </SelectItem>
          ))}
        </Select>
      </label>
      <div>
        Observaciones:
        <textarea value={descripcion} onChange={handleDescripcionChange}></textarea>
      </div>
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

      <Button onClick={handleSubmit}>Enviar</Button>
    </form>
  );
}