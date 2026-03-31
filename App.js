import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
 import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput} from "react-native-paper";

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
       <View style={styles.inputContainer}>
        <TextInput
        placeholder ="what would you like to focus ..."
        mode ={"outlined"}
        label= "focus"
        style = {styles.inputText }
        />
        <TouchableOpacity style={styles.fabButton} onPress={() => {}}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
       </View>

      <View style={styles.focusedTasks}>
       <Text style={styles.focusTitle}>Things we've focused on:</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c0a75',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  inputText: {
    flex: 1,
    marginRight: 10,
  },
  fabButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
  },
  fabText: {
    fontSize: 20,
    color: '#fff',
  },
  focusedTasks: {
    marginTop: 20,
    padding: 10,
  },
  focusTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
    color: '#fff',
  },
});