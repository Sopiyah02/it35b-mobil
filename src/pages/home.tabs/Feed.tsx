import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Feed: React.FC = () => {

    const games = [
        {name: 'Pokémon Yellow'},
        {name: 'Mega Man X'},
        {name: 'The Legend of Zelda'},
        {name: 'Pac-Man'},
         {name: 'Super Mario World'}
    ]
    return (
        <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                <IonTitle>Feed</IonTitle>
                    </IonToolbar>
                </IonHeader>
              <IonContent className="ion-padding">
      <IonList>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>

    {games.map((item, index) => (
    <IonItem key={index}>
        <IonLabel>{item.name}</IonLabel>
    </IonItem>
    ))}
              </IonContent>
        </IonPage>

    );
}

export default Feed;
