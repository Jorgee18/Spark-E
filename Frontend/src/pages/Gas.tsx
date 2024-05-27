import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText, IonIcon, IonGrid, IonRow, IonCol} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../components/Header';
import './Gas.css';
import '../theme/variables.css';

const Gas: React.FC = () => {

  const history = useHistory();

  return (
    <IonPage id="Gas">
      <Header title="Medición de Gas"/>
      <IonContent fullscreen>
        <div className="info-gas">
            <IonGrid>
                
                <IonRow>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <div className='medidor'>
                                    <p><strong>CO2</strong></p>
                                    <img src="../public/mediciongas.png" alt="" />
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className='medidor'>
                                    <p><strong>CO</strong></p>
                                    <img src="../public/mediciongas.png" alt="" />
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <div className='medidor'>
                                    <p><strong>CH4</strong></p>
                                    <img src="../public/mediciongas.png" alt="" />
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className='medidor'>
                                    <p><strong>NOX</strong></p>
                                    <img src="../public/mediciongas.png" alt="" />
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonRow>

                <IonRow><p className='parrafo'><strong>Recuerda que los niveles seguros de CO2 son de hasta 2000 ppm y los niveles seguros de CO son de hasta 9 ppm.</strong></p></IonRow>
            </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Gas;