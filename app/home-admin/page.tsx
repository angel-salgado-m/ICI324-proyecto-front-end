"use client";
import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import styles from '../../styles/styleop.module.css';
import DataTable from '@/components/registros';


const data = [
  {
    Direccion: 'Dirección 1',
    Trabajador: 'Trabajador 1',
    Tipo: 'Tipo 1',
    Estado: 'Estado 1',
    Imagen: 'https://sodimac.scene7.com/is/image/SodimacCL/1043560_01?wid=1500&hei=1500&qlt=70',
    Descripcion: '1La medición fotográfica de gas en un departamento es un procedimiento esencial para garantizar la seguridad y el bienestar de sus habitantes. A través de tecnología de vanguardia, se capturan imágenes detalladas de los dispositivos de gas y tuberías, permitiendo una inspección minuciosa para identificar posibles fugas, conexiones defectuosas o problemas de desgaste. Este enfoque no invasivo y preciso brinda tranquilidad a los residentes al asegurar que el entorno sea seguro y cumple con las normativas de seguridad, promoviendo un hogar saludable y libre de riesgos',
    date: 'Fecha 1',
  },
  {
    Direccion: 'Dirección 2',
    Trabajador: 'Trabajador 2',
    Tipo: 'Tipo 2',
    Estado: 'Estado 2',
    Imagen: 'url_de_la_imagen_2',
    Descripcion: 'descripcion breve',
    date: 'Fecha 2',
  },
  {
    Direccion: 'Dirección 3',
    Trabajador: 'Trabajador 3',
    Tipo: 'Tipo 3',
    Estado: 'Estado 3',
    Imagen: 'url_de_la_imagen_3',
    Descripcion: '3La medición fotográfica de gas en un departamento es un procedimiento esencial para garantizar la seguridad y el bienestar de sus habitantes. A través de tecnología de vanguardia, se capturan imágenes detalladas de los dispositivos de gas y tuberías, permitiendo una inspección minuciosa para identificar posibles fugas, conexiones defectuosas o problemas de desgaste. Este enfoque no invasivo y preciso brinda tranquilidad a los residentes al asegurar que el entorno sea seguro y cumple con las normativas de seguridad, promoviendo un hogar saludable y libre de riesgos',
    date: 'Fecha 3',
  },
  {
    Direccion: 'Dirección 3',
    Trabajador: 'Trabajador 3',
    Tipo: 'Tipo 3',
    Estado: 'Estado 3',
    Imagen: 'url_de_la_imagen_3',
    Descripcion: '3La medición fotográfica de gas en un departamento es un procedimiento esencial para garantizar la seguridad y el bienestar de sus habitantes. A través de tecnología de vanguardia, se capturan imágenes detalladas de los dispositivos de gas y tuberías, permitiendo una inspección minuciosa para identificar posibles fugas, conexiones defectuosas o problemas de desgaste. Este enfoque no invasivo y preciso brinda tranquilidad a los residentes al asegurar que el entorno sea seguro y cumple con las normativas de seguridad, promoviendo un hogar saludable y libre de riesgos',
    date: 'Fecha 3',
  },
  {
    Direccion: 'Dirección 3',
    Trabajador: 'Trabajador 3',
    Tipo: 'Tipo 3',
    Estado: 'Estado 3',
    Imagen: 'url_de_la_imagen_3',
    Descripcion: '3La medición fotográfica de gas en un departamento es un procedimiento esencial para garantizar la seguridad y el bienestar de sus habitantes. A través de tecnología de vanguardia, se capturan imágenes detalladas de los dispositivos de gas y tuberías, permitiendo una inspección minuciosa para identificar posibles fugas, conexiones defectuosas o problemas de desgaste. Este enfoque no invasivo y preciso brinda tranquilidad a los residentes al asegurar que el entorno sea seguro y cumple con las normativas de seguridad, promoviendo un hogar saludable y libre de riesgos',
    date: 'Fecha 3',
  },
  // Agrega más datos según tus necesidades
];
export default function Home_admin() {
  return (
    <div className={styles.base}>
      <DataTable data={data}/>
    </div>
  );
}
