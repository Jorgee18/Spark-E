import { IonContent, IonPage, IonToolbar, IonRouterLink, IonButton, IonItem, IonLabel, IonInput, IonText, IonCheckbox} from '@ionic/react';
import Header from '../components/Header';
import './Password.css';
//import '../public';

const Password : React.FC = () => {

    return(
        <IonPage>
            <Header title="Cambiar Clave">
            </Header>
            <IonContent fullscreen>
            
            <div>
                <form className="ion-padding">
                    <IonItem>
                        <IonLabel position="floating">Correo electronico (email)</IonLabel>
                        <IonInput type="email"/>
                    </IonItem>
                    <IonText id="msgErrorEmail" color="danger" className="ion-padding-start">
                        <small></small>
                    </IonText>

                    <IonItem>
                        <IonLabel position="floating">Nueva Contraseña</IonLabel>
                        <IonInput type="password" />
                    </IonItem>
                    <IonText id="msgErrorPassword" color="danger" className="ion-padding-start">
                        <small></small>
                    </IonText>

                    <IonItem>
                        <IonLabel position="floating">Confirmar Contraseña</IonLabel>
                        <IonInput type="password" />
                    </IonItem>
                    <IonText id="msgErrorConfirmPassword" color="danger" className="ion-padding-start">
                        <small></small>
                    </IonText>

                    <IonItem>
                        <IonLabel position="floating">Ingrese codigo de confirmacion</IonLabel>
                        <IonInput type="number" />
                    </IonItem>
                    <IonText id="msgErrorCod" color="danger" className="ion-padding-start">
                        <small></small>
                    </IonText>

                    <p><a href="#"><strong>Pedir código de confirmación</strong></a></p>
                    
                    <IonButton color={"dark"} className="ion-margin-top" type="submit" expand="block">
                    Continuar
                    </IonButton>
                </form>
            </div>
            </IonContent>

        </IonPage>
    );
};

export default Password;