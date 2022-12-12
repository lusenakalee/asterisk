import { IonAvatar, IonButton, IonButtons, IonCard, IonCardSubtitle, IonCol, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import { useCallback } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { useNavigate, Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';

import './Dashboard.css';



const Dashboard: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Asterisk</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='Sidebar'>
          <IonCol >
            <Sidebar/>
          </IonCol>
         
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
      <IonRow>
            <IonCol>
              <h1>Dashboard</h1>
              <h5>Welcome back User</h5>
          </IonCol>
          <IonCol >
            <IonRow className='AvatarRow' >
              <IonItem >
                <IonAvatar  slot="start">
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                Avatar Item
                </IonLabel>
              </IonItem>
            </IonRow>
          </IonCol>
      </IonRow>
      <IonRow className='topRow'>
        <IonCol>
          <IonRow>
            <IonCol className='topRowColumns'>
              <h3>Total calls</h3>
              <h2>590</h2>
            </IonCol>
            <IonCol>
              <img src='./assets/Line 8.png'/>
            </IonCol>
          </IonRow>
        </IonCol>
        <IonCol>
        <IonRow>
            <IonCol className='topRowColumns'>
            <h3>Incoming calls</h3>
            <h2>300</h2>
            </IonCol>
            <IonCol>
            <img src='./assets/Line 8.png'/>
            </IonCol>
            </IonRow>
        </IonCol>
        <IonCol>
        <IonRow>
            <IonCol className='topRowColumns'>
            <h3>Outgoing calls</h3>
            <h2>250</h2>
            </IonCol>
            <IonCol>
            <img src='./assets/Line 8.png'/>
            </IonCol>
            </IonRow>
        </IonCol>
        <IonCol>
        <IonRow>
            <IonCol >
            <h3>Total Duration</h3>
            <h2>25000</h2>
            </IonCol>
            
            </IonRow>
        </IonCol>
        </IonRow>
            <IonCard>
            <IonRow >
              <IonCol><IonCardSubtitle>Avg. Calls</IonCardSubtitle><h2>2000</h2></IonCol>
              <IonCol><IonCardSubtitle>Avg. Holdtime</IonCardSubtitle><h2>222</h2></IonCol>
              <IonCol><IonCardSubtitle>Total abandoned calls</IonCardSubtitle><h2>10</h2></IonCol>
              <IonCol><IonCardSubtitle>Total online agents</IonCardSubtitle><h2>3</h2></IonCol>
              </IonRow>
            </IonCard>
            <IonRow className='RecentTitle'><h4>Recent Calls</h4></IonRow>
            <IonRow >
            <IonList className='recentCalls'>
              <IonItem >
                <IonLabel className='ListTitle'>Number</IonLabel>
                <IonLabel className='ListTitle'>Direction</IonLabel>
                <IonLabel className='ListTitle'>Disposition</IonLabel>
                <IonLabel className='ListTitle'>Duration</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>0722121212</IonLabel>
                <IonLabel>Inbound</IonLabel>
                <IonLabel>No answer</IonLabel>
                <IonLabel>0</IonLabel>
              </IonItem>
              <IonItem>
              <IonLabel>0722121212</IonLabel>
                <IonLabel>Outbound</IonLabel>
                <IonLabel>Answered</IonLabel>
                <IonLabel>00:00:30</IonLabel>
              </IonItem>
              <IonItem>
              <IonLabel>0722121212</IonLabel>
                <IonLabel>Outbound</IonLabel>
                <IonLabel>Answered</IonLabel>
                <IonLabel>00:00:30</IonLabel>
              </IonItem>
              <IonItem>
              <IonLabel>0722121212</IonLabel>
                <IonLabel>Inbound</IonLabel>
                <IonLabel>No answer</IonLabel>
                <IonLabel>0</IonLabel>
              </IonItem>
            </IonList>
       
            </IonRow>
          
        </IonContent>
      </IonPage>
    </>
  );
};

export default Dashboard;
function setItems(arg0: any[]) {
  throw new Error('Function not implemented.');
}

function useEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error('Function not implemented.');
}

