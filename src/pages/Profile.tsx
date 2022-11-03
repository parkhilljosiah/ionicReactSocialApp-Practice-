import { IonBackButton, IonButtons, IonContent, IonFooter, IonPage, IonRouterOutlet, IonToolbar } from '@ionic/react';
import { RouteComponentProps, Route } from 'react-router';
import ProfileHeader from '../components/ProfileHeader';
import Bio from './Bio';
import Posts from './Posts';
import Friends from './Friends';
import Photos from './Photos';
import Home from './Home';

const Profile: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonToolbar color="medium">
        <ProfileHeader />
      </IonToolbar>
      <IonContent>
        <IonRouterOutlet>
          <Route exact path={`${match.url}`} component={Home} />
          <Route exact path={`${match.url}/bio`} component={Bio} />
          <Route exact path={`${match.url}/posts`} component={Posts} />
          <Route exact path={`${match.url}/friends`} component={Friends} />
          <Route exact path={`${match.url}/photos`} component={Photos} />
        </IonRouterOutlet>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref=''></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Profile;
