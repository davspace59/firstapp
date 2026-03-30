import { View, Text, StyleSheet} from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
      <Text>amole bingo </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: '#3c0a75'
  }
})