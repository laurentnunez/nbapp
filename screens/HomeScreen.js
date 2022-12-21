//import { StatusBar } from 'expo-status-bar';
//import TeamScreen from './screens/TeamScreen';
import { useEffect, useState } from 'react';
import { SafeAreaView,StyleSheet, Text, ActivityIndicator,View  } from 'react-native';
import {Card} from 'react-native-elements';

export default function HomeScreen({ navigation }) {

//let [isLoading, setIsLoading] = useState(true);
//let [error, setError] = useState();
//let [response, setResponse] = useState();
const [games, setGames] = useState([]);


useEffect(()=> {

  //const options = {
    //method: 'GET',
    //headers: {
      //'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
      //'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    //}
  //};

  fetch('https://api.sportsdata.io/v3/nba/stats/json/BoxScores/2022-DEC-20?key=cea20b49658146aa897fd5a6ee565e05')
  .then(res => res.json())
  .then((result)=>{
    console.log(result);
    setGames(result);
  });

},[]);

  return(
  
    <SafeAreaView style={styles.container}>
      <Text style={styles.innerText}>MATCHS DU JOUR</Text>
 
     {games ? (
         games.map((game)=>(
        	      <Card containerStyle={styles.card} key={game.GameID} >
                 <Text  style={styles.innerText} >{game.HomeTeam} - {game.HomeTeamScore} vs. {game.AwayTeamScore} - {game.AwayTeam}</Text>
             </Card>
      	    ))
    ):(<ActivityIndicator size="large" color="black"/>)}	 
  
   </SafeAreaView>




  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor:'#000',
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    marginVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    flexDirection:'row',
  },
  innerText: {
    fontWeight: 'bold',
    color:'white',
    fontSize: 20,
    alignSelf: 'center',
    
  },
  

});


