import HomeScreen from "./screens/HomeScreen";
import GamesScreen from "./screens/GamesScreen";
import StandingsScreen from "./screens/StandingsScreen";
import VideosScreen from "./screens/VideosScreen";
import TeamScreen from './screens/TeamScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

const tab = createBottomTabNavigator();

export default function App() {

return (
  <NavigationContainer>
    
    <tab.Navigator
      screenOptions={({route})=> ({
        tabBarIcon: ({focus, size, color})=> {
          let iconName;
          if(route.name==="Home"){
            iconName = focus ? "fa-solid fa-basketball-hoop" : "fa-regular fa-basketball-hoop";
          } else if(route.name==="Matchs"){
            iconName = focus ? "basketball-outline" : "basketball-sharp";
          } else if(route.name==="Vidéos"){
            iconName = focus ? "caret-forward-circle-outline" : "caret-forward-circle-sharp";
          } else if(route.name==="Stats"){
            iconName = focus ? "stats-chart-outline" : "stats-chart-sharp";
          }
          return <FontAwesomeIcon name={iconName} size={size} color={color}/>;
        }
      })}
      screenOptions={{
      tabBarActiveTintColor:'white',
      tabBarInactiveTintColor:'red',
      tabBarShowLabel: 'false',
      tabBarStyle: [{
        backgroundColor:'#1a1a1a',
        height:50,
        "display": "flex"
      },
      null]
      }}>
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen name="Matchs" component={GamesScreen} />
      <tab.Screen name="Vidéos" component={VideosScreen} />
      <tab.Screen name="Stats" component={StandingsScreen} />
      <tab.Screen name="Team" component={TeamScreen} />
    
    </tab.Navigator>
  </NavigationContainer>
);

}