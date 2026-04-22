import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { chatboxOutline, shareOutline, thumbsUpOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';

const Search:React.FC = () => {
    const games = [
    {name: 'Pokemon Yellow', details:"I love Pickachu"},
    {name: 'Mega Man X', details:"I love Mega Man"},
    {name: 'The Legend of Zelda', details:"I love Zelda"},
    {name: 'Pac-Man', details:"I love Pac-Man"},
    {name: 'Super Mario World', details:"I love Super Mario"}
    ]
    
    const [searchText, setSearchText] = useState('');
    const [filtered,setFilteredGames] = useState(games);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filtered = games.filter(game=>
                game.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filtered);
        },400);

        return () => clearTimeout(debounce);
    },[searchText]);

    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonSearchbar placeholder = "Search Games"
                value={searchText}
                debounce = {0}
                onIonInput={(e) => setSearchText(e.detail.value!)}
                >
                </IonSearchbar>
                    <IonList>
                                        {filtered.map((item,index) => (
                                    <IonCard key={index}>
                                    <img alt="Silhouette of mountains" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCAmBnea5kUQ8dKVCHE7_Rld6i9HQRBooeg&s"} />
                                    <IonCardHeader>
                                        <IonCardTitle>{item.name}</IonCardTitle>
                                        <IonCardSubtitle>{item.details}</IonCardSubtitle>
                                    </IonCardHeader>
                    
                    
                    
                                    <IonCardContent></IonCardContent>
                                    <IonGrid>
                                        <IonRow>
                                        <IonCol>
                                            <IonButton fill="clear" expand="full">
                                                <IonIcon icon={thumbsUpOutline}></IonIcon>
                                                <IonLabel style={{ marginLeft: '5px' }}>Like</IonLabel>
                                            </IonButton>
                                        </IonCol>
                                        <IonCol>
                                            <IonButton fill="clear" expand="full">
                                                <IonIcon icon={chatboxOutline}></IonIcon>
                                                <IonLabel style={{ marginLeft: '5px' }}>Comment</IonLabel>
                                            </IonButton>
                                        </IonCol>
                                        <IonCol>
                                            <IonButton fill="clear" expand="full">
                                                <IonIcon icon={shareOutline}></IonIcon>
                                                <IonLabel style={{ marginLeft: '5px' }}>Share</IonLabel>
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                    
                                ))}
                                     </IonList>
                
                </IonContent>
        </IonPage>
    );
};

export default Search;
