import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './NotificacionEspecifica.css';
import '../theme/variables.css';

interface NotificacionItem {
  "id_notificación": string;
  titulo: string;
  fecha: string;
  "descripción": string;
  estado: boolean;
}

const NotificacionEspecifica: React.FC = () => {
  const [notificacion, setNotificacion] = useState<NotificacionItem>();
  const history = useHistory();
  
  const handleNavigation = (path: any) => {
    history.push(path);
  };

  const fetchNotificacion = async () => {
    try {
      const response = await fetch(`http://localhost:3360/notificaciones/${sessionStorage.getItem("id-notificacion")}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${sessionStorage.getItem("token")}`,
            Identifier: `${sessionStorage.getItem("identificador")}` 
        },
      });
      
      const data = await response.json();
      setNotificacion(data[0]);
    } catch (error) {
      console.error('Error al obtener las notificaciones:', error);
    }
  };
  
  useEffect(() => {
    fetchNotificacion();
  }, []);

  return (
    <IonPage id="NotificacionEspecifica">
      <Header title="Notificación"/>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle><strong>{notificacion?.titulo}</strong></IonCardTitle>
            <IonCardSubtitle>{notificacion?.fecha}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <strong>{notificacion ? notificacion.descripción : "No hay descripción disponible"}</strong>
          </IonCardContent>

          <IonButton onClick={() => handleNavigation('/gas')} fill="clear">Medición de Gas</IonButton>
          <IonButton onClick={() => handleNavigation('/temperatura')} fill="clear">Temperatura</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default NotificacionEspecifica;
