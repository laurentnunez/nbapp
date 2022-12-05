import { Image } from "react-native";
import { StatusBar, View, Text } from "react-native-web";

export default function TeamScreen({route}) {

  const estTeam = route.params

  return (
    <View>
      <Text>{estTeam.name}</Text>
      <Image
        source={{uri:estTeam.logo}}
        style={{
        width:200,
        height:250
        }}
      />
      <StatusBar style="auto" />
    </View>
  )
}