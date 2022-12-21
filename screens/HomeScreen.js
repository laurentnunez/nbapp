//import { StatusBar } from 'expo-status-bar';
//import TeamScreen from './screens/TeamScreen';
import { useEffect, useState } from 'react';
import { SafeAreaView,StyleSheet, Text, ActivityIndicator,View  } from 'react-native';

export default function HomeScreen({ navigation }) {

//let [isLoading, setIsLoading] = useState(true);
//let [error, setError] = useState();
//let [response, setResponse] = useState();
const [teams, setTeams] = useState([]);
const [leagues, setLeagues] = useState([]);

useEffect(()=> {

  //const options = {
    //method: 'GET',
    //headers: {
      //'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
      //'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    //}
  //};

  fetch('https://api.sportsdata.io/v3/nba/scores/json/Standings/2023?key=cea20b49658146aa897fd5a6ee565e05')
  .then(res => res.json())
  .then((result)=>{
    console.log(result);
    setTeams(result);
  });

},[]);

  return(
  
    <SafeAreaView>

 
     {teams ? (
         teams.map((team)=>(
        	      <View key={team.TeamID} >
                 <Text >{team.City} {team.Name}</Text>
             </View>
      	    ))
    ):(<ActivityIndicator size="large" color="black"/>)}	 
  
   </SafeAreaView>




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


