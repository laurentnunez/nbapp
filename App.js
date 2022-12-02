//import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { ActivityIndicator, View } from 'react-native-web';


export default function App() {



//let [isLoading, setIsLoading] = useState(true);
//let [error, setError] = useState();
//let [response, setResponse] = useState();
const [teams, setTeams] = useState([]);

useEffect(()=> {
  fetch('https://www.balldontlie.io/api/v1/teams')
  .then(res => res.json())
  .then((result)=>{
    console.log(result);
    setTeams(result.data);
  });
},[]);

return(
  <SafeAreaView>

  {teams ? (
    teams.map((team)=>(
      <View key={team.id}>
        <Text>{team.full_name}</Text>
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
