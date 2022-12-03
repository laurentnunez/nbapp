import HomeScreen from "./screens/HomeScreen";
import TeamScreen from "./screens/TeamSrceen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {

return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: "Bienvenue sur NBApp"}}
      />
      <Stack.Screen 
        name="Team"
        component={TeamScreen}

      />
    </Stack.Navigator>
  </NavigationContainer>
);

}