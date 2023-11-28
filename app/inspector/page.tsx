"use client";
import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Button } from '@nextui-org/react';
import styles from '../../styles/styleop.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { getdxs } from '../../api/direccionApi';

export default function InspectorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dxs, setDxs] = useState(0);
  const [datosDxs, setDatosDxs] = useState([]);
  const token = searchParams.get('token');
  const sector = searchParams.get('sector');
  const userType = searchParams.get('cargo');
  const queryParams = {
    token: token,
    sector: sector,
    cargo: userType,
  };

  const fetchDxs = async (sector) => {
    const datosDxs = await getdxs(sector);
    setDxs(datosDxs.length);
    setDatosDxs(datosDxs);
  };

  useEffect(() => {
    fetchDxs(sector);
  }, [sector]);

  return (
    <div className={styles.base}>
      <div className={styles.boxout}>
        <div className={styles.boxout}>Sector Asignado: {sector}</div>
        <div className={styles.boxout}>Direcciones totales: {dxs}</div>
      </div>
      <div className={styles.boxout}>
        Generar
        <div>
          <NextLink href={{ pathname: '/forum', query: { ...queryParams, forumtype: 'Novedad' } }}>
            <Button className={styles.boxout}>Novedad Boton</Button>
          </NextLink>
          <NextLink href={{ pathname: '/forum', query: { ...queryParams, forumtype: 'Lectura' } }}>
            <Button className={styles.boxout}>Lectura Boton</Button>
          </NextLink>
          <NextLink href={{ pathname: '/forum', query: { ...queryParams, forumtype: 'Revision' } }}>
            <Button className={styles.boxout}>Revision Boton</Button>
          </NextLink>
        </div>
      </div>
    </div>
  );
}
