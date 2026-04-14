import { IonRouterOutlet, IonTabBar, IonTabs, IonTitle, IonToolbar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Feed from './home.tabs/Feed';
import Favorites from './home.tabs/Favorites';
import Search from './home.tabs/Search'; 
import { bookOutline, star, search } from 'ionicons/icons';

const Home: React.FC = () => {
  const tabs = [
    {name: 'Feed', tab: 'Feed', url: '/app/home/feed', icon: bookOutline},
    {name: 'Favorites', tab: 'Favorites', url: '/app/home/favorites', icon: star},
    {name: 'Search', tab: 'Search', url: '/app/home/search', icon: search}, 
  ]
  return (

      <IonTabs>
        <IonTabBar>
          <IonToolbar slot="button">
            <IonTitle>
              Tabs
            </IonTitle>
          </IonToolbar>
          {/**/}
          {tabs.map((item, index) => (
            <IonTabButton tab={item.tab} key={index}>
              <IonIcon icon={item.icon}/>
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
        <IonRouterOutlet>
          <Route>
            <Route path="/app/home/feed" component={Feed}/>
            <Route path="/app/home" component={() => <Redirect to="/app/home/feed"/>}/>
            <Route path="/app/home/favorites" component={Favorites}/>
            <Route path="/app/home/search" component={Search}/>
          </Route>
        </IonRouterOutlet>
      </IonTabs>
  );
};


export default Home;