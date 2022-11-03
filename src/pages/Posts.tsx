import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import posts from "../posts.json";

const Posts: React.FC = () => {

    const displayContent = () => {
        return posts.map((p) => {
            let key = p.date

            return(
                <IonCard key={key}>
                    <IonCardHeader>
                        <IonCardSubtitle>{p.date}</IonCardSubtitle>
                        <IonCardTitle>{p.postTitle}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{p.postContent}</IonCardContent>
                </IonCard>
            )
        })
    }

    return (
        <>
            <h1 className="ion-text-center">Posts</h1>
            <div>
                {displayContent()}
            </div>
        </>
    )
}

export default Posts;