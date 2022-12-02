//import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { ActivityIndicator, View } from 'react-native-web';


export default function App() {



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
  <SafeAreaView>

  {teams ? (
    teams.map((team)=>(
      <View key={team.id}>
        <Text>{team.name}</Text>
        
      </View>
    ))
  ):(<ActivityIndicator size="large" color="black"/>)}

  </SafeAreaView>

);
    };






//useEffect(()=>{

//  getTeams();
//  },[]);

//  const getTeams = () => {
//    fetch('https://www.balldontlie.io/api/v1/teams')
//    .then(function(response){
//      return response.json();
//    }).then(function(response){
//      console.log(response.data);
//      setTeams(response.data);
//    }); 
//  }

  //const getContent = () => {
  //  if (isLoading) {
  //    return <ActivityIndicator size="large"/>;
  //  }

  //  if (error) {
  //   return <Text>{error}</Text>
  //  }
  //  console.log(response.data);

  //  return <Text>{response["full_name"]}</Text>
  //};
  
 // }


  //return (
    
  //);
//}
