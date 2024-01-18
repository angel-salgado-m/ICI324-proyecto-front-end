"use client";
import { useEffect, useState } from 'react';
import styles from '../../styles/styleop.module.css';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../../components/mapa'), { ssr: false });
export default function InspectorPage() {
  return (
    <div className={styles.base}>
      <div className={styles.boxout}>
      <Map />
      </div>
    </div>
  );
}
