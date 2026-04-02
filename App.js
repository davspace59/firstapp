import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import FocusTime from './components/FocusTime';

export default function App() {

  const [addTask, setAddTask] = useState(false);
  const [task, setTask] = useState("");

  const handleBack = () => {
    setAddTask(prev => !prev);
  };
  const handleTextChange = (text) => {
    setTask(text);
  };

  if (addTask) {
    return <FocusTime onBack={handleBack} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="what would you like to focus ..."
          mode="outlined"
          label="focus"
          style={styles.inputText}
          value={task}
          onChangeText={handleTextChange}
        />
        <TouchableOpacity style={styles.fabButton} onPress={() => setAddTask(true)}>
          <Text style={styles.fabText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.focusedTasks}>
        <Text style={styles.focusTitle}>Things we've focused on:</Text>

        {/* <View style={{ flex: 1, color: '#fff'}}> */}
          <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> 1, Learn react native</Text>  
          <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> 2, Learn js basics</Text>
      </View>
       

    </SafeAreaView>
  );
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