import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import "./Photos.css";

const Photos: React.FC = () => {

    const photos: string[] = [
        "https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1451188502541-13943edb6acb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1495080600440-47b003ed9521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    ]

    const displayContent = (x: string[]) => {
        return x.map(p => {

            let key = p

            return (
                <img key={key} className="photos" src={p} alt='' />
            )
        })
    }

    return (
        <>
            <h1 className="ion-text-center">Photos</h1>
            {displayContent(photos)}
        </>
    )
}

export default Photos;