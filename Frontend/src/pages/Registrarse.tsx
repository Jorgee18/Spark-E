import { IonContent, IonPage, IonSelect, IonSelectOption, IonLabel, IonItem, IonInput, IonButton, IonText} from '@ionic/react';
import Header from '../components/Header';
import React, { useState } from 'react';
import './Registrarse.css';
import '../theme/variables.css';

const Registrarse: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedComuna, setSelectedComuna] = useState<string | null>(null);

  const regions = [
    { value: 'region1', label: 'Región 1' },
    { value: 'region2', label: 'Región 2' },
    // Agrega más regiones según sea necesario
  ];

  const comunas = [
    { value: 'comuna1', label: 'Comuna 1' },
    { value: 'comuna2', label: 'Comuna 2' },
    // Agrega más comunas según sea necesario
  ];

  return (
    <IonPage>
      <Header title="Crear Cuenta"/>
      <IonContent fullscreen>
      <form className="ion-padding">
            <IonItem>
                <IonLabel position="floating">Nombre de usuario</IonLabel>
                <IonInput type="text" pattern='' minlength={5} maxlength={15}/>
            </IonItem>
            <IonText id="msgErrorUserName" color="danger" className="ion-padding-start">
                <small></small>
            </IonText>
            
            <IonItem>
                <IonLabel position="floating">RUT (sin puntos, con guión y digito verificador)</IonLabel>
                <IonInput type="text"/>
            </IonItem>
            <IonText id="msgErrorRut" color="danger" className="ion-padding-start">
                <small></small>
            </IonText>

            <IonItem>
                <IonLabel position="floating">Correo electrónico (email)</IonLabel>
                <IonInput type="text"/>
            </IonItem>
            
            <IonText id="msgErrorEmail" color="danger" className="ion-padding-start">
                <small></small>
            </IonText>

            <IonItem>
                <IonLabel>Región</IonLabel>
                <IonSelect value={selectedRegion} placeholder="Selecciona una región" onIonChange={e => setSelectedRegion(e.detail.value)} interface="popover">
                    <IonSelectOption disabled value="">Selecciona una región</IonSelectOption>
                    {regions.map(region => (
                        <IonSelectOption key={region.value} value={region.value}>
                            {region.label}
                        </IonSelectOption>
                    ))}
                </IonSelect>
            </IonItem>

            <IonItem>
                <IonLabel>Comuna</IonLabel>
                <IonSelect value={selectedComuna} placeholder="Selecciona una comuna" onIonChange={e => setSelectedComuna(e.detail.value)} interface="popover">
                    <IonSelectOption disabled value="">Selecciona una comuna</IonSelectOption>
                    {comunas.map(comuna => (
                        <IonSelectOption key={comuna.value} value={comuna.value}>
                            {comuna.label}
                        </IonSelectOption>
                    ))}
                </IonSelect>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Crear contraseña</IonLabel>
                <IonInput type="password"/>
            </IonItem>
            
            <IonText id="msgErrorPassword" color="danger" className="ion-padding-start">
                <small></small>
            </IonText>

            <IonItem>
                <IonLabel position="floating">Confirmar contraseña</IonLabel>
                <IonInput type="password"/>
            </IonItem>
            <IonText id="msgErrorConfirmPassword" color="danger" className="ion-padding-start">
                <small></small>
            </IonText>

            <IonButton color={"dark"} className="ion-margin-top" type="submit" expand="block">
                Continuar
            </IonButton>

            <p>Al hacer click en continuar, acepta nuestros <a href="#"><strong>términos de servicio y política de privacidad</strong></a></p>
        </form>
    
      </IonContent>
    </IonPage>
  );
};

export default Registrarse;