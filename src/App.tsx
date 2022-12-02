import { Route, BrowserRouter as Router, Routes, BrowserRouter, Link} from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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

/* Theme variables */
import './theme/variables.css';

import LogInPage from './pages/LogInPage';
import SignUp1Page from './pages/SignUp1Page';
import SignUp2Page from './pages/SignUp2Page';
import { Button } from 'react-bootstrap';


setupIonicReact();

const user=null

;

const App: React.FC = () => (
  <div className='App'>
    <>
    

    <Routes>
      <Route path="/" element={<Tab1/>}/>
      <Route path="/login" element={<LogInPage/>}/>
      <Route path="/register" element={<SignUp1Page/>}/>
      <Route path="/signUp" element={<SignUp2Page/>}/>
    </Routes>
    </>
     
  </div>

  

  



);

export default App;
