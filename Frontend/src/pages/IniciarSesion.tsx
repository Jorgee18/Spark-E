import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import './IniciarSesion.css';
import '../theme/variables.css';

const IniciarSesion: React.FC = () => {
  const history = useHistory();

  const registerClick = () => {
    history.push('/registrarse');
  };

  const passwordClick = () => {
    history.push('/password');
  };

  return (
    <IonPage>
      <Header title="Iniciar Sesión"/>
      <IonContent fullscreen>
        <div>
            <form className="ion-padding">
            
            <div className="image-container">
              <img src="../public/mascota.png" alt="Mascota Spark-E" />
            </div>

            <p className="press-start"><strong>Bienvenido</strong></p>

            <IonItem>
              <IonLabel position="floating">Ingrese su nombre de usuario</IonLabel>
              <IonInput type="text" />
            </IonItem>
            
            <IonText id="msgErrorUserName" color="danger" className="ion-padding-start">
            <small></small>
            </IonText>

            <IonItem>
              <IonLabel position="floating">Ingrese su contraseña</IonLabel>
              <IonInput type="password" />
            </IonItem>

            <IonText id="msgErrorPassword" color="danger" className="ion-padding-start">
            <small></small>
            </IonText>
            
            <p><a onClick={passwordClick}><strong>¿Has olvidado tu contraseña?</strong></a></p>
            
            <IonButton color={"dark"} className="ion-margin-top" type="submit" expand="block">
              Continuar
            </IonButton>
            
            <p>¿Todavía no tienes una cuenta? <a className="ion-color-dark" onClick={registerClick}><strong>Registrate</strong></a></p>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default IniciarSesion;
