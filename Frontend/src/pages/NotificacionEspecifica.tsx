import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../components/Header';
import './NotificacionEspecifica.css';
import '../theme/variables.css';

const NotificacionEspecifica: React.FC = () => {

  const history = useHistory();

  const handleNavigation = (path: any) => {
    history.push(path);
  };

  return (
    <IonPage id="NotificacionEspecifica">
      <Header title="Notificación"/>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle><strong>Actualización de estado</strong></IonCardTitle>
            <IonCardSubtitle>06:11</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent><strong>No se han encontrado amenazas.</strong></IonCardContent>

          <IonButton onClick={() => handleNavigation('/gas')} fill="clear">Medición de Gas</IonButton>
          <IonButton onClick={() => handleNavigation('/temperatura')} fill="clear">Temperatura</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default NotificacionEspecifica;