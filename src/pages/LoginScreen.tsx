import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { trailSignOutline } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';


const LoginScreen : React.FC = () => {
    const [signIn, setSignIn]=useState(false);
    

  return (
    <IonPage >
      
      <IonContent >
        <div  className='loginScreen'>
        <div className="loginscreen_bg">
            <img className='loginScreen_logo'src='./assets/LOGO TEST.png' alt=''/>
            <IonButton onClick={()=>setSignIn(true)} className='loginScreen_btn'>Log In</IonButton>
            <div className='loginScreen_gradient'/>
        </div>
        <div className="loginScreen_body">
            {signIn ?(<SignUpScreen/>):(
                 <>
                 <h1>Make and receive VOIP and Normal calls anywhere in the world and more...</h1>
                 <h2>Retrieve information from your database without talking to anyone.</h2>
                 <h3>Ready to get started? Enter your email below to create an account.</h3>
                 <div className="loginScreen_input">
                     <form>
                         <input type='email' placeholder='Email Address'/>
                         <button onClick={()=>setSignIn(true)} className='loginScreen_getStarted'>GET STARTED</button>
                     </form>
                 </div> 
                 </>
            )}
           
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginScreen;
