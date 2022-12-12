import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { FunctionComponent, useCallback } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { useNavigate, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


const Sidebar: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonDashboardClick = useCallback(() => {
    navigate("/Dashboard");
  }, [navigate]);

  const onButtonCallPopUpClick = useCallback(() => {
    navigate("/CallPopUp");
  }, [navigate]);

 

  const onButtonCallClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonSMSClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


 

 


  return (

    
      <IonContent className='MenuButtonsColumn'>
      
       <Button className='MenuButtons'   onClick={onButtonDashboardClick}>Dashboard</Button> 
       <Button className='MenuButtons'  onClick={onButtonCallClick}>Call</Button>
       <Button className='MenuButtons'  onClick={onButtonSMSClick}>SMS</Button>
       <Button className='MenuButtons'  onClick={onButtonCallPopUpClick}>Call PopUp</Button>
      
      </IonContent>

          
          
  );
};

export default Sidebar;
