import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText ,IonSearchbar, IonList, IonNote, IonIcon} from '@ionic/react';
//import {useForm} from 'react-hook-form';
//npm install react-hook-form
import { chevronForward, listCircle } from 'ionicons/icons';
import Header from '../components/Header';
import Button from '../components/Button'
import NotificacionesState from '../components/NotificacionesState';
import './Notificaciones.css';
import '../theme/variables.css';
import { useEffect, useState } from 'react';

interface NotificacionItem {
  "id_notificación": string;
  titulo: string;
  fecha: string;
  "descripción": string;
  estado: boolean;
}

const Notificaciones = () => { 
  const [data, setData] = useState<NotificacionItem[]>([]);
  
  const fetchNotificaciones = async () => {
    try {
      const response = await fetch("http://localhost:3360/notificaciones/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${sessionStorage.getItem("token")}`,
            Identifier: `${sessionStorage.getItem("identificador")}` 
        },
        });
      
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error al obtener las notificaciones:', error);
    }
  };
  
  useEffect(() => {
    fetchNotificaciones();
  }, []);
  

  return (
    <IonPage id='Notificaciones'>
      <Header title="Notificaciones" />
      <IonContent fullscreen>

        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>

        <IonList inset={true}>
            {data.map((notificacion, index) => (<NotificacionesState key={index} id={notificacion["id_notificación"]} state={notificacion.titulo} info={notificacion["descripción"]} fecha={notificacion.fecha} visto={notificacion.estado} />))}

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notificaciones;