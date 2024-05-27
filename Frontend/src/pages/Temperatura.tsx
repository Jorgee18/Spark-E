import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText, IonToggle} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import './Temperatura.css';
import '../theme/variables.css';

const Temperatura = () => {

    const [isCelsius, setIsCelsius] = useState(true);
    const [temperature, setTemperature] = useState(44);

    const handleToggleChange = () => {
        setIsCelsius(!isCelsius);
        const newTemperature = isCelsius ? (temperature * 9/5) + 32 : (temperature - 32) * 5/9;
        setTemperature(Math.round(newTemperature));
    };
  
    return (
        <IonPage id='Temperatura'>
        <Header title="Temperatura" />
        <IonContent fullscreen>
            <IonToggle className='boton' checked={isCelsius} onIonChange={handleToggleChange} labelPlacement='end'>
                {isCelsius ? 'Celsius' : 'Fahrenheit'}
            </IonToggle>
            <div className="info-temperatura info-agrupada">
                <span>
                    <img className="termometro" src="../public/termometro.jpg" alt=""/>
                </span>
                <div>
                    <span className="grados">
                        {temperature}° {isCelsius ? 'C' : 'F'}
                    </span>
                    <span className="texto-alerta">
                        Temperatura peligrosa
                    </span>
                </div>
            </div>

            <div className="info-temperatura">
                <div className="titulo-grafico">
                    Temperatura ambiente
                </div>

                <div className="grafico-texto">
                    <img className="grafico" src="../public/grafico.jpg" alt=""/>
                    <div className="texto-superpuesto">
                        {temperature}° {isCelsius ? 'C' : 'F'}
                    </div>
                </div>
            </div>

            <div className="info-temperatura">
                <div className="titulo-grafico">
                    Humedad ambiente
                </div>

                <div className="grafico-texto">
                    <img className="grafico" src="../public/grafico.jpg" alt=""/>
                    <div className="texto-superpuesto">
                        49%
                    </div>
                </div>
            </div>
        </IonContent>
        </IonPage>
    );
};

export default Temperatura;