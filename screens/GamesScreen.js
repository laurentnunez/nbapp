import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import {Card} from 'react-native-elements';



export default function GamesScreen() {


  return (

    <SafeAreaView style={styles.container}>
        <FlatList
          data={[
            {key: 'Boston Celtics'},
            {key: 'Brooklyn Nets'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
          ]}
          renderItem={({item}) => (
            <Card containerStyle={styles.card}>
              
                <Text style={styles.innerText}>{item.key}</Text>
              
                <Text style={styles.innerText}>Celtics</Text>
                <Text style={styles.innerText}>bulls</Text>
                
            </Card>
          )}
        />
      </SafeAreaView>
    );

}

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