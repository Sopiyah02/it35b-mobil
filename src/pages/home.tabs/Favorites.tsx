import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Favorites: React.FC = () => {
    return (
        <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Favorites</IonTitle>
                    </IonToolbar>
                </IonHeader>
              <IonContent fullscreen>

              </IonContent>
        </IonPage>

    );
}

export default Favorites;
