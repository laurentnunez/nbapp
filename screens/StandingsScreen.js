import { useEffect, useState } from 'react';
import { SafeAreaView,StyleSheet, Text, ActivityIndicator,View  } from 'react-native';



export default function StandingsScreen() {

//  const [teams, setTeams] = useState([]);

//  useEffect(()=> {

  
//    fetch('https://api.sportsdata.io/v3/nba/scores/json/Standings/2023?key=cea20b49658146aa897fd5a6ee565e05')
//    .then(res => res.json())
//    .then((result)=>{
//      console.log(result);
//      setTeams(result);
//    });
  
//  },[]);




  return //(
  
  
//  <SafeAreaView>

//    {teams ? (
//        teams.map((team)=>(
//               <View key={team.TeamID} >
//                <Text >{team.ConferenceRank} {team.City} {team.Name} {team.Percentage}</Text>
//            </View>
//           ))
//   ):(<ActivityIndicator size="large" color="black"/>)}	 
 
//  </SafeAreaView>




// );

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