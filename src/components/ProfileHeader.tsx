import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { Link } from "react-router-dom";
import './ProfileHeader.css';

const ProfileHeader: React.FC = () => {
    return (
        <>
            <IonGrid>
                <IonRow>
                    <IonCol size-md="4">
                        <img className="img" alt="" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                    </IonCol>
                    <IonCol size-md="8">
                        <div className="namePlate">
                            <h1 className="name">John Doe</h1>
                            <h5 className="title">Software Developer</h5>
                        </div>
                    </IonCol>
                </IonRow>
                    <Link className="link" to="/profile/bio">Bio</Link>
                    <Link className="link" to="/profile/posts">Posts</Link>
                    <Link className="link" to="/profile/friends">Friends</Link>
                    <Link className="link" to="/profile/photos">Photos</Link>
            </IonGrid>
        </>
    )
}

export default ProfileHeader;