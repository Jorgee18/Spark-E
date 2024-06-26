import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import IniciarSesion from './pages/IniciarSesion';
import TerminosDeServicio from './pages/TerminosDeServicio';
import Registrarse from './pages/Registrarse';
import Password from './pages/Password';
import Menu from './pages/Menu';
import Notificaciones from './pages/Notificaciones';
import Temperatura from './pages/Temperatura';
import Comportamiento from './pages/Comportamiento';
import Gas from './pages/Gas';
import NotificacionEspecifica from './pages/NotificacionEspecifica'
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
//import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

/*const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        
        <Route exact path="/iniciar-sesion">
          <IniciarSesion />
        </Route>
        
        <Route exact path="/registrarse">
          <Registrarse />
        </Route>

        <Route exact path="/terminos-de-servicio">
          <TerminosDeServicio />
        </Route>

        <Route exact path="/password">
          <Password />
        </Route>

        <Route exact path="/menu">
          <Menu />
        </Route>

        <Route exact path="/notificaciones">
          <Notificaciones />
        </Route>

        <Route exact path="/temperatura">
          <Temperatura />
        </Route>

        <Route exact path="/gas">
          <Gas />
        </Route>

        <Route exact path="/comportamiento">
          <Comportamiento />
        </Route>

        <Route exact path="/notificacion-especifica">
          <NotificacionEspecifica />
        </Route>

        <Route exact path="/">
          <Redirect to="/iniciar-sesion" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
*/

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/iniciar-sesion" component={IniciarSesion} />
          <Route exact path="/registrarse" component={Registrarse} />
          <Route exact path="/terminos-de-servicio" component={TerminosDeServicio} />
          <Route exact path="/password" component={Password} />
          
          <ProtectedRoute exact path="/menu" component={Menu} />
          <ProtectedRoute exact path="/notificaciones" component={Notificaciones} />
          <ProtectedRoute exact path="/temperatura" component={Temperatura} />
          <ProtectedRoute exact path="/gas" component={Gas} />
          <ProtectedRoute exact path="/comportamiento" component={Comportamiento} />
          <ProtectedRoute exact path="/notificacion-especifica" component={NotificacionEspecifica} />
          
          <Route exact path="/">
            <Redirect to="/iniciar-sesion" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </AuthProvider>
  </IonApp>
);

export default App;