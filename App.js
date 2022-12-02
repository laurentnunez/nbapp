//import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { ActivityIndicator, FlatList, View } from 'react-native-web';


export default function App() {



//let [isLoading, setIsLoading] = useState(true);
//let [error, setError] = useState();
//let [response, setResponse] = useState();
const [estTeams, setEstTeams] = useState([]);

useEffect(()=> {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  fetch('https://api-nba-v1.p.rapidapi.com/teams?conference=East', options)
  .then(res => res.json())
  .then((result)=>{
    console.log(result);
    setEstTeams(result.response);
  });
},[]);


  return(
  
  <View>
    <Text style={styles.title}>CONFERENCE EST</Text>
    <View style={styles.container}>
      
      {estTeams ? (
        estTeams.map((estTeam)=>(
          <View style={styles.teamCard} key={estTeam.id}>
            <Text style={styles.teamName}>{estTeam.name}</Text>
            <Image
            style={{
              width:110,
              height:130,
              margin:5,
              padding: 20,
              
            }}
            source={{uri:estTeam.logo}}/>
            
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
    justifyContent: 'center',
    backgroundColor: '#000',
    flexDirection:'row',
    justifyContent:"space-evenly",
    flexWrap:"wrap",

  },

  teamCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    width: 150,
    height: 180,
    margin:10,
    padding: 3,
    borderRadius:3,
  
  },
  
  teamName: {
    color:'#E9E9E9',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },

  title: {
    color:'#008b8b',
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },

});


