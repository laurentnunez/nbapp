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
    headers: {
      'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  fetch('https://api-nba-v1.p.rapidapi.com/teams', options)
  .then(res => res.json())
  .then((result)=>{
    console.log(result);
    setTeams(result.response);
  });

},[]);


  return(
  
  <View >

    <View style={styles.container}>
      {teams ? (
        teams.map((team)=>(
          <View key={team.id}>
            <TouchableOpacity onPress={()=> navigation.navigate("Team",team)}>
              <Image
              style={{
                width:91,
                height:91,
                margin:10,
                padding: 5,
                
              }}
              source={{uri:team.logo}}/>
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


