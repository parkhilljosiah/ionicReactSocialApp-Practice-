import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import friends from "../friends.json";

const Friends: React.FC = () => {

    const displayContent = () => {
        return friends.map((f) => {
            let key = f.name

            return (
                <IonItem key={key}>
                    <IonAvatar className="ion-margin-end">
                        <img alt="" src={f.avatar} />
                    </IonAvatar>
                    <IonLabel>{f.name}</IonLabel>
                </IonItem>
            )
        })
    }

    return (
        <>
            <h1 className="ion-text-center">Friends</h1>
            <div>
                {displayContent()}
            </div>
        </>
    )
}

export default Friends;