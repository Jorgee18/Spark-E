import { IonContent, IonPage, IonSelect, IonSelectOption, IonLabel, IonItem, IonInput} from '@ionic/react';
import Header from '../components/Header';
import Button from '../components/Button'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Registrarse.css';
import '../theme/variables.css';

const Registrarse: React.FC = () => {
  const history = useHistory();
  const termsAndServicesClick = () => {
    history.push('/terminos-de-servicio');
  };

  const expRegxStrUserName = /^[a-zA-Z][a-zA-Z0-9-_\. ]{3,15}$/;
  const expRegxStrPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  const expRegxStrRut = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/
  
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedComuna, setSelectedComuna] = useState<string | null>(null);
  const [fieldUsername, setUsername] = useState({value:'', className: '', errorText: '_'}); //Username
  const [fieldRut, setRut] = useState({value:'', className: '', errorText: '_'}); //Rut
  const [fieldEmail, setEmail] = useState({value:'', className: '', errorText: '_'}); //Email
  const [fieldPassword, setPassword] = useState({value:'', className: '', errorText: '_'}); //Password
  const [fieldConfirmPassword, setConfirmPassword] = useState({value:'', className: '', errorText: '_'}); //Confirmar Password

  const [isConfirmPasswordDisabled, setConfirmPasswordDisabled] = useState(true);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formValid = true;

    //Nombre de usuario
    if(!validUsername()){
      formValid = false;
    }

    //Rut
    if(!validRut()){
      formValid = false;
    }
    
    //Email
    if(!validEmail()){
      formValid = false;
    }
    
    //Contraseña
    if(!validPassword()){
      formValid = false;
    }

    //Confirmar Password
    if(!validConfirmPassword()){
      formValid = false;
    }
  }

  const validUsername = () => {
    const usernameValue = fieldUsername.value;
    
    if(usernameValue.length == 0){
      setUsername(prevState => ({
        ...prevState, 
        className: "ion-invalid ion-touched",
        errorText: "El nombre es obligatorio"
      }));
      return false;
    }
    
    if(usernameValue.length < 3){
      setUsername(prevState => ({
        ...prevState, 
        className: "ion-invalid ion-touched",
        errorText: "El nombre debe tener al menos 3 caracteres"
      }));
      return false;
    }
    
    if(usernameValue.length > 15){
      setUsername(prevState => ({
        ...prevState, 
        className: "ion-invalid ion-touched",
        errorText: "El nombre debe tener máximo 15 caracteres"
      }));
      return false;
    }
    
    if(!expRegxStrUserName.test(usernameValue)){
      setUsername(prevState => ({
        ...prevState,
        className: "ion-invalid ion-touched",
        errorText: "El nombre debe contener solo letras y/o números"
      }));
      return false;
    }
    
    return true;
  }
  
  const validEmail = () => {
    const emailValue = fieldEmail.value;
    if(emailValue.length == 0){
      setEmail(prevState => ({
        ...prevState,
        className: "ion-invalid ion-touched",
        errorText: "El email es obligatorio"
      }));
      return false;
    }    
    return true;
  }

  const validRut = () => {
    const RutValue = fieldRut.value;

    if(RutValue.length == 0){
      setRut(prevState => ({
        ...prevState, 
        className: "ion-invalid ion-touched",
        errorText: "El rut es obligatorio"
      }));
    return false;
    }

    if(!expRegxStrRut.test(RutValue)){
      setRut(prevState => ({
        ...prevState,
        className: "ion-invalid ion-touched",
        errorText: "El rut ingresado debe ser válido (sin puntos y con guión)"
      }));
      return false;
    }

    return true;
  }

  const validPassword = () => {
    const PasswordValue = fieldPassword.value;

    if(PasswordValue.length == 0){
      setPassword(prevState => ({
        ...prevState, 
        className: "ion-invalid ion-touched",
        errorText: "La contraseña es obligatoria"
      }));
    return false;
    }

    if(PasswordValue.length < 8){
      setPassword(prevState => ({
        ...prevState, 
        className: "ion-invalid ion-touched",
        errorText: "La contraseña debe tener al menos 8 caracteres"
      }));
      return false;
    }

    if(PasswordValue.length > 20){
      setPassword(prevState => ({
        ...prevState, 
        className: "ion-invalid ion-touched",
        errorText: "La contraseña debe tener máximo 20 caracteres"
      }));
      return false;
    }

    if(!expRegxStrPassword.test(PasswordValue)){
      setPassword(prevState => ({
        ...prevState, 
        className: "ion-invalid ion-touched",
        errorText: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número o carácter especial"
      }));
      return false;
    }

    return true;
  }

  const validConfirmPassword = () => {
    const confirmPasswordValue = fieldConfirmPassword.value;
    const newPasswordValue = fieldPassword.value;
    if (confirmPasswordValue.length == 0){
      setConfirmPassword(prevState => ({
        ...prevState,
        className: "ion-invalid ion-touched",
        errorText: "La confirmación de contraseña es obligatoria"
      }));
      return false;
    }
    if (confirmPasswordValue != newPasswordValue){
      setConfirmPassword(prevState => ({
        ...prevState,
        className: "ion-invalid ion-touched",
        errorText: "La contraseña ingresada no coincide con la nueva contraseña"
      }));
      return false;
    }
    return true;
  }

useEffect(() => {
  fetch('./src/pages/comunas-regiones.json')
    .then(respuesta => respuesta.json())
    .then((data: any) => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}, []);

/*useEffect(() => {
  fetch('./comunas-regiones.json', { cache: 'no-store' })
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`HTTP error! status: ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then((data: any) => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);*/

/*
const fs = require('fs');

fs.readFile('./comunas-regiones.json', 'utf8', (err:any, data:any) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});*/

  /*const regiones = [
    { value: 'region1', label: 'Región 1' },
    { value: 'region2', label: 'Región 2' },
    // Agrega más regiones según sea necesario
  ];*/

  /*const fs = require('fs');
  let data = fs.readFilec('../public/comunas-regiones.json');
  console.log(data)
  let personas=JSON.parse(data);
  console.log(personas);*/
  const [fieldRegiones, setRegiones] = useState([{region:String, comunas: []}]);

  useEffect(() => {
    // Realiza la solicitud fetch para obtener los datos del archivo JSON
    fetch('./src/pages/comunas-regiones.json')
      .then(response => response.json())
      .then(data => {
        setRegiones(data);
      })
      .catch(error => {
        console.error('Error al leer el archivo JSON:', error);
      });
  }, []);

  return (
    <IonPage id='Registrarse' >
      <Header title="Crear Cuenta"/>
      <IonContent fullscreen>
      <div>
        <h1>Lista de Regiones y Comunas</h1>
        <ul>
          {fieldRegiones.map((region, index) => (
            <li key={index}>
              <ul>
                {region.comunas.map((comuna, i) => (
                  <li key={i}>{comuna}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <form className="ion-padding" onSubmit={handleSubmit}>
            <IonInput 
                id="fieldName"
                value={fieldUsername.value}
                className={fieldUsername.className} //ion-invalid ion-touched
                label="Usuario"
                labelPlacement="floating"
                fill="outline"
                placeholder="Ingrese un nombre de usuario"
                errorText={fieldUsername.errorText}
                type="text" 
                onIonChange ={validUsername}
                onIonInput={e => {
                  const newValue = e.detail.value || '';
                  const newClassName = "";
                  const newErrorText = "_";
                  setUsername({ value: newValue, className: newClassName, errorText: newErrorText });
                }}
              >
            </IonInput>
            
            <IonInput
                id="fieldRut"
                className={fieldRut.className} //ion-invalid ion-touched
                value={fieldRut.value}
                label="Rut"
                labelPlacement="floating"
                fill="outline"
                placeholder="Ingrese su Rut"
                errorText={fieldRut.errorText}
                type="number" 
                //pattern={expRegxStrRut}
                onIonChange ={validRut}
                onIonInput={e => {
                  const newValue = e.detail.value || '';
                  const newClassName = "";
                  const newErrorText = "_";
                  setRut({ value: newValue, className: newClassName, errorText: newErrorText });
                }}>
            </IonInput>

            <IonInput 
                id="fieldEmail"
                className={fieldEmail.className} //ion-invalid ion-touched
                value={fieldEmail.value}
                label="Email"
                labelPlacement="floating"
                fill="outline"
                placeholder="Correo electrónico (email)"
                errorText={fieldEmail.errorText}
                type="text"
                onIonChange={validEmail}
                onIonInput={e => {
                  const newValue = e.detail.value || '';
                  const newClassName = "";
                  const newErrorText = "_";
                  setEmail({ value: newValue, className: newClassName, errorText: newErrorText });
                }}>
            </IonInput>
            
            <IonItem>
                <IonLabel>Región</IonLabel>
                <IonSelect 
                value={selectedRegion} 
                placeholder="Selecciona una región" 
                onIonChange={e => setSelectedRegion(e.detail.value)} 
                interface="popover">
                    <IonSelectOption disabled value="">Selecciona una región</IonSelectOption>
                    {/*regiones.map(region => (
                        <IonSelectOption key={region.value} value={region.value}>
                            {region.label}
                        </IonSelectOption>
                    ))*/}
                </IonSelect>
            </IonItem>

            <IonItem>
                <IonLabel>Comuna</IonLabel>
                <IonSelect value={selectedComuna} placeholder="Selecciona una comuna" onIonChange={e => setSelectedComuna(e.detail.value)} interface="popover">
                    <IonSelectOption disabled value="">Selecciona una comuna</IonSelectOption>
                    {/*comunas.map(comuna => (
                        <IonSelectOption key={comuna.value} value={comuna.value}>
                            {comuna.label}
                        </IonSelectOption>
                    ))*/}
                </IonSelect>
            </IonItem>

            <IonInput 
                id="fieldPassword" 
                type='password'
                className={fieldPassword.className}
                value={fieldPassword.value}
                label="Contraseña" 
                labelPlacement="floating" 
                fill="outline" 
                placeholder="Ingrese su contraseña" 
                errorText={fieldPassword.errorText}
                //pattern={expRegxStrPassword}
                onIonChange={validPassword}
                onIonInput={e => {
                  const newValue = e.detail.value || '';
                  const newClassName = "";
                  const newErrorText = "_";
                  setPassword({ value: newValue, className: newClassName, errorText: newErrorText });
                  setConfirmPasswordDisabled(newValue.length == 0);
                }}>
            </IonInput>

            <IonInput 
                id="fieldConfirmPassword" 
                type='password'
                className={fieldConfirmPassword.className}
                value={fieldConfirmPassword.value}
                label="Confirmar contraseña" 
                labelPlacement="floating" 
                fill="outline"
                placeholder="Reingrese su contraseña" 
                errorText={fieldConfirmPassword.errorText}
                onIonChange={validConfirmPassword}
                onIonInput={e => {
                  const newValue = e.detail.value || '';
                  const newClassName = "";
                  const newErrorText = "_";
                  setConfirmPassword({ value: newValue, className: newClassName, errorText: newErrorText });
                }}
                disabled={isConfirmPasswordDisabled}
                ></IonInput>

            <Button title="Continuar" onClickFunction={()=> {}} typeButton="submit"/>

            <p>Al hacer click en continuar, acepta nuestros <a className="ion-color-dark" onClick={termsAndServicesClick}><strong>términos de servicio y política de privacidad</strong></a></p>
        </form>
    
      </IonContent>
    </IonPage>
  );
};

export default Registrarse;