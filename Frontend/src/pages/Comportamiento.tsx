import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText, IonIcon} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../components/Header';
import './Comportamiento.css';
import '../theme/variables.css';

const Comportamiento: React.FC = () => {

  const history = useHistory();

  return (
    <IonPage id="Comportamiento">
      <Header title="Comportamiento"/>
      <IonContent fullscreen>
        <div className="image-container">
          <img src="../public/mapa.png" alt="Mapa topográfico" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Comportamiento;