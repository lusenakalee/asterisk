import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './CallPopUp.css';
import{ arrowUndoOutline} from 'ionicons/icons'
import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const CallPopUp: FunctionComponent = () => {

const navigate = useNavigate();


const onButtonDashboardClick = useCallback(() => {
    navigate("/Dashboard");
  }, [navigate]);


  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Sidebar/>
          
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Call Pop Up</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
      <IonRow className='callIconsRow'> 
      <IonCol className='callIconsColumn'>
        <IonCol>
         
          <img src='./assets/callTransfer.png' className='callIcons'/> 
          </IonCol>
          <IonCol>
          <img src='./assets/endCall.png' className='callIcons'/>
          </IonCol>
          <IonCol>
          <img src='./assets/smsIcon.png' className='callIcons'/>
          </IonCol>
      </IonCol>
      
      </IonRow>
      
       
      
      <IonRow className="actions">
      
        <IonCol><IonButton fill="clear">Create Lead</IonButton></IonCol>
        <IonCol><IonButton fill="clear">Create Contact</IonButton></IonCol>
        <IonCol><IonButton fill="clear">Create Task</IonButton></IonCol>
        <IonCol><IonButton fill="clear">Create Cases</IonButton></IonCol>
      </IonRow>
      </IonCardContent>
    </IonCard>
    <IonRow>
    Incoming call from 97257866 to extension 10003
    </IonRow>
    <IonRow className='callInfo'>
      <IonCol className='callPopUpListCard'>
      <IonCard >
        <IonList className='callPopUpList'>
          <IonItem>
            <IonLabel>Caller ID</IonLabel>
            <IonLabel>Caller ID</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Source Number</IonLabel>
            <IonLabel>0722121121</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Destination Number</IonLabel>
            <IonLabel>10002</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Contact</IonLabel>
            <IonLabel>Jeffrey</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Status</IonLabel>
            <IonLabel>Status</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Direction</IonLabel>
            <IonLabel>Status</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Recording Link</IonLabel>
            <IonLabel>Recording</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Call duration</IonLabel>
            <IonLabel>12:00:00</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Assigned user</IonLabel>
            <IonLabel>Leroy</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Start time</IonLabel>
            <IonLabel>Date & Time</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>End time</IonLabel>
            <IonLabel>Date & Time</IonLabel>
          </IonItem>
        </IonList>
      </IonCard>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
      <IonItem fill="outline">
        <IonLabel position="floating">Notes</IonLabel>
        <IonInput placeholder="Type here"></IonInput>
      </IonItem>
      </IonCol>
      <IonCol><IonButton>Save</IonButton></IonCol>
      
    
      
    </IonRow>
        </IonContent>
      </IonPage>
    </>
  );
};

export default CallPopUp;
