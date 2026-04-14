import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Feed: React.FC = () => {
    return (
        <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                <IonTitle>Feed</IonTitle>
                    </IonToolbar>
                </IonHeader>
              <IonContent fullscreen>

              </IonContent>
        </IonPage>

    );
}

export default Feed;
