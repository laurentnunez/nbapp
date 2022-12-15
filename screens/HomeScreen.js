//import { StatusBar } from 'expo-status-bar';
//import TeamScreen from './screens/TeamScreen';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, ActivityIndicator,Button,TouchableOpacity,View  } from 'react-native';

export default function HomeScreen({ navigation }) {

//let [isLoading, setIsLoading] = useState(true);
//let [error, setError] = useState();
//let [response, setResponse] = useState();
const [teams, setTeams] = useState([]);

useEffect(()=> {

  const options = {
    method: 'GET',
  };

  //fetch('https://api.sportsdata.io/v3/nba/scores/json/teams?key=cea20b49658146aa897fd5a6ee565e05')
  //.then(res => res.json())
  //.then((result)=>{
    //console.log(result);
    //setTeams(result);
  //});

},[]);


  return(
  
  <View >

    <View style={styles.container}>
      {teams ? (
        teams.map((team)=>(
          <View >
            <TouchableOpacity onPress={()=> navigation.navigate("Team",team)}>
              <Image key={team.TeamId}
              style={{
                width:91,
                height:91,
                margin:10,
                padding: 5,
                
              }}
              source={{uri:team.WikipediaLogoUrl}}/>
            </TouchableOpacity>
          </View>
        ))
      ):(<ActivityIndicator size="large" color="black"/>)}
      </View>

    </View>





  );

};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 5,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
    backgroundColor: '#000',
    flexDirection:'row',
    flexWrap:"wrap",

  },
  

});


