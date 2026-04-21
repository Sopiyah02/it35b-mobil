import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';

const Search: React.FC = () => {
    const games = [
        {name: 'Pokemon Yellow'},
        {name: 'Mega Man X'},
        {name: 'The Legend of Zelda'},
        {name: 'Pac-Man'},
        {name: 'Super Mario World'}
    ]
    const [searchText,setSearchText] = useState("");
    const [filtered,setFilteredGames] =useState(games);
    useEffect(()=>{
        const debounce = setTimeout (()=>{
            const filtered = games.filter(game=>
                game.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filtered);
        },400);
        return ()=> clearTimeout(debounce);
    },[searchText]);
    
    return (
        <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Search</IonTitle>
                         <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
                    </IonToolbar>
                </IonHeader>
              <IonContent fullscreen>

              </IonContent>
        </IonPage>

    );
}

export default Search;
