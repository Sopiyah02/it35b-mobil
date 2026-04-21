import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Feed from "./home-tabs/Feed";
import Search from "./home-tabs/Search";
import Favorites from "./home-tabs/Favorites";
import { bookmarkOutline, search, star } from "ionicons/icons";

const Home: React.FC = () => {
  const tabs = [
    {name:'feed',tab:'feed',url:'/app/home/Feed',icon:bookmarkOutline},
    {name:'search',tab:'search',url:'/app/home/Search',icon:search},
    {name:'favorites',tab:'favorites',url:'/app/home/Favorites',icon:star},
  ]
  return (
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot="bottom">
          <IonToolbar>
            <IonTitle>Tabs</IonTitle>
          </IonToolbar>
          {/**/}
          {tabs.map((item, index)=>(
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <IonIcon icon={item.icon}/>
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
        <IonRouterOutlet>
          <Route exact path="/app/home/Feed" component={Feed} />
          <Route exact path="/app/home">
            <Redirect to="/app/home/Feed" />
          </Route>
          <Route exact path="/app/home/Search" component={Search} />
          <Route exact path="/app/home/Favorites" component={Favorites} />
        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;