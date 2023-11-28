"use client";
import React, { useState } from "react";
import { Select, SelectItem, Image, Input, Button } from "@nextui-org/react";
import styles from "../../styles/styleop.module.css";

export default function Novedad() {
  const [direcciones] = useState([
    { id: 1, nombre: "san jose" },
    { id: 2, nombre: "asdassssd sdsdsd 2" },
    { id: 3, nombre: "bsddaaa 3" },
    { id: 4, nombre: "lo espejo 4" },
    { id: 5, nombre: "manantiales 5" },
    { id: 6, nombre: "seco" },
    // Agrega más direcciones según sea necesario
  ]);
  const [asuntos] = useState([
    { id: 1, nombre: "Actualizacion de cliente" },
    { id: 2, nombre: "Actualizacion de medidor" },
    { id: 3, nombre: "Errores de lectura" },
    // Agrega más direcciones según sea necesario
  ]);

  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [selectedAsunto, setSelectedAsunto] = useState(null);

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

  const updateDireccion = (value) => {
    setSelectedDirection(value);
  };
  const updateAsunto = (value) => {
    setSelectedDirection(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Dirección seleccionada:", selectedDirection);
    console.log("Descripción:", descripcion);
    console.log("Imagen:", imagen);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.forum}>
      <Select
        aria-label="Asunto"
        aria-labelledby="Asunto"
        value={selectedAsunto}
        onChange={updateAsunto}
        placeholder="Asunto..."
      >
        {asuntos.map((asunto) => (
          <SelectItem key={asunto.id} value={asunto} she>
            {asunto.nombre}
          </SelectItem>
        ))}
      </Select>
      <label>
        Dirección:
        <Select
          aria-label="direccion"
          aria-labelledby="direccion"
          value={selectedDirection}
          onChange={updateDireccion}
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
        Descripción:
        <textarea
          value={descripcion}
          onChange={handleDescripcionChange}
        ></textarea>
      </label>

      <label>
        Imagen(opcional):
        <input type="file" accept="image/*" onChange={handleImagenChange} />
      </label>

      {imagenPreview && (
        <Image
          src={imagenPreview}
          alt="Preview de la imagen"
          style={{ maxWidth: "100%", marginTop: "10px" }}
        />
      )}
      <Button type="submit">Enviar</Button>
    </form>
  );
}
