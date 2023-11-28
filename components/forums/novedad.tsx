"use client";
import React, { useState, useEffect } from 'react';
import { Select, SelectItem, Image, Input, Button } from '@nextui-org/react';
import styles from "../../styles/styleop.module.css";
const backendUrl = 'http://localhost:3030';
const bdtype = 'sql';
export default function Novedad({ direcciones }) {
  const [imagen, setImagen] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [selectedAsunto, setSelectedAsunto] = useState(null);
  const [asuntos] = useState([
    { id: 1, name: "Actualizacion de cliente",value: "actCliente"},
    { id: 2, name: "Actualizacion de medidor", value: "actMedidor" },
    { id: 3, name: "Errores de lectura" ,value: "errLectura"},
    // Agrega más direcciones según sea necesario
  ]);
  const updateAsunto = (value) => {
    setSelectedAsunto(value);
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
  const handleSubmit = async () => {
    if (!selectedDirection) {
      alert('Por favor, selecciona una dirección.');
      return;
    }
    const formData = new FormData();
    formData.append('idDireccion', selectedDirection.target.value);
    formData.append('tipo', 'Novedad');
    formData.append('estado', 'uncheck');
    formData.append('asunto', asuntos[selectedAsunto.target.value].value);
    formData.append('fecha', new Date().toISOString());
    formData.append('image', imagen);
    try {
      const response = await fetch(`${backendUrl}/registro/addReg/${bdtype}`,{
        method: 'POST',
        body: formData,
      });

      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        alert('values enviados exitosamente.');
      } else {
        alert('Error al enviar los values. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar los values:', error);
      alert('Se produjo un error al enviar los values. Por favor, inténtalo más tarde.');
    }
  };
  return (
    <form className={styles.forum}>
      <label>
        <Select
            aria-label="Asunto"
            aria-labelledby="Asunto"
            value={selectedAsunto}
            onChange={updateAsunto}
            placeholder="Asunto..."
          >
            {asuntos.map((asunto) => (
              <SelectItem key={asunto.id} value={asunto.name} >
                {asunto.name}
              </SelectItem>
            ))}
          </Select>
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
