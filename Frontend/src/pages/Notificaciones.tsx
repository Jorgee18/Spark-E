import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText ,IonSearchbar, IonList, IonNote, IonIcon} from '@ionic/react';
import { useHistory } from 'react-router-dom';
//import {useForm} from 'react-hook-form';
//npm install react-hook-form
import { chevronForward, listCircle } from 'ionicons/icons';
import Header from '../components/Header';
import Button from '../components/Button'
import NotificacionesState from '../components/NotificacionesState';
import './Notificaciones.css';
import '../theme/variables.css';

const Notificaciones = () => {
  return (
    <IonPage id='Notificaciones'>
      <Header title="Notificaciones" />
      <IonContent fullscreen>

        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>

        <IonList inset={true}>

          <NotificacionesState state="Actualizacion de estado" info="No se han encontrado amenazas." fecha="06:11" visto={true}/>  
          <NotificacionesState state="Actualizacion de estado" info="No se han encontrado amenazas." fecha="03:44" visto={false}/>  
          <NotificacionesState state="Actualizacion de estado" info="Alerta: Se han detectado amenazas" fecha="Ayer" visto={true}/>  
          <NotificacionesState state="Actualizacion de estado" info="Alerta: Se han detectado amenazas" fecha="Ayer" visto={false}/>  
          <NotificacionesState state="Actualizacion de estado" info="No se han encontrado amenazas." fecha="26/05/24" visto={false}/>  
          <NotificacionesState state="Actualizacion de estado" info="No se han encontrado amenazas." fecha="25/05/24" visto={true}/>  
          <NotificacionesState state="Actualizacion de estado" info="No se han encontrado amenazas." fecha="24/05/24" visto={false}/>  

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notificaciones;