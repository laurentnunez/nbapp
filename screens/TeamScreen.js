import { Image } from "react-native";
import { StatusBar, View, Text } from "react-native-web";

export default function TeamScreen({route}) {


  const datasTeam = route.params

  return (
    <View>
      <Text key={datasTeam.TeamId} >{datasTeam.Name}</Text>
      <Image
        source={{uri:datasTeam.WikipediaLogoUrl}}
        style={{
        width:200,
        height:250
        }}
      />

      <StatusBar style="auto" />
    </View>
  )
}