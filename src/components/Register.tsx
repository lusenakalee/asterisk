import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { trailSignOutline } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from './ExploreContainer';
import './Register.css';

const register : React.FC = () => {

  return (
  
        <div className="signUpScreen">
          <form>
            <h1>Sign Up</h1>
            
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='password'/>
            <input type='password' placeholder='Repeat password'/>
            <button type='submit'  >Submit</button>
            <h4>
              <span className='signUpScreen_gray'>I have an account? </span> 
              <span className='signUpScreen_link' >Log In here</span>
            </h4>
          </form>
        </div>
      
  );
};

export default register;
