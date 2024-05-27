import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText} from '@ionic/react';
import { useHistory } from 'react-router-dom';
//import {useForm} from 'react-hook-form';
//npm install react-hook-form
import Header from '../components/Header';
import Button from '../components/Button';
import './Menu.css';
import '../theme/variables.css';

const Menu: React.FC = () => {
    const history = useHistory();

    const handleNavigation = (path: any) => {
       history.push(path);
    };

  return (
    <IonPage id='Menu'>
      <Header title="Menu de Opciones" />
      <IonContent fullscreen >
        <div className="menu-container">
            <div className="menu-grid">
                <div className="menu-item" onClick={() => handleNavigation('/temperatura')}>
                    <img src="../public/temperatura.png" alt="Temperatura"/>
                </div>
                <div className="menu-item" onClick={() => handleNavigation('/notificaciones')}>
                    <img src="../public/notificaciones.png" alt="Notificaciones" />
                </div>
                <div className="menu-item" onClick={() => handleNavigation('/gas')}>
                    <img src="../public/gas.png" alt="Medicion de gas" />
                </div>
                <div className="menu-item" onClick={() => handleNavigation('/comportamiento')}>
                    <img src="../public/comportamiento.png" alt="Comportamiento del fuego" /> 
                </div>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
//<span className="d-flex justify-content-end"><a href="temperaturaCelsius.html"><img src="../public/temperatura.png" alt=""/></a></span>