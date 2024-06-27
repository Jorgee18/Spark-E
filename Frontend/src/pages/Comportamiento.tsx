import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './Comportamiento.css';
import '../theme/variables.css';

interface MapaItem {
  dimension: number;
  posX: number;
  posY: number;
  mapa: string[];
}

const Comportamiento: React.FC = () => {
  const [dataMapa, setDataMapa] = useState<MapaItem>();

  const fetchDataMapa = async () => {
    try {
      const response = await fetch("http://localhost:5000/mapa");
      const data = await response.json();
      setDataMapa(data);
    } catch (error) {
      console.error('Error al obtener el mapa del robot:', error);
    }
  };

  useEffect(() => {
    fetchDataMapa();
    const intervalId = setInterval(fetchDataMapa, 100);
  
    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []);

  const history = useHistory();

  const renderTable = () => {
    if (!dataMapa) return null;

    const rows = [];
    for (let i = 0; i < dataMapa.mapa.length; i += dataMapa.dimension) {
      const cells = dataMapa.mapa.slice(i, i + dataMapa.dimension).map((item, index) => {
        const x = Math.floor(i / dataMapa.dimension);
        const y = index;
        const isObjectPosition = y === dataMapa.posY && x === dataMapa.posX;
        return (
          <td key={index} className={isObjectPosition ? 'X' : item}></td>
        );
      });
      rows.push(<tr key={i}>{cells}</tr>);
    }
    return rows;
  };

  return (
    <IonPage id="Comportamiento">
      <Header title="Comportamiento" />
      <IonContent fullscreen>
        
        <div className='map-container'>
          <table className="map-table">
            <tbody>
              {renderTable()}
            </tbody>
          </table>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Comportamiento;