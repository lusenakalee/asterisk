import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { trailSignOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './SignUpScreen.css';


const SignUpScreen : React.FC = () => {
  const history=useHistory();
  

    const register=(e)=>{
      e.preventDefault();
    };

    const signIn=(e)=>{
      e.preventDefault();
    };

  return (
  
        <div className="signUpScreen">
          <form>
            <>
            <h1>Sign In</h1>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='password'/>
            <button type='submit'  onClick={signIn}>Log In</button>
            <h4>
              <span className='signUpScreen_gray'>New User? </span> 
              <span className='signUpScreen_link' onClick={register}>Sign Up here</span>
            </h4>
            </>
          </form>
        </div>
      
  );
};

export default SignUpScreen;
