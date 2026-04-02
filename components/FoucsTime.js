import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView }from 'react-native-safe-area-context'
import {useState, useEffect} from 'react'
import  FocusTime from '/componts/FocusTime'

export default function FocusTime({}){  
    const time = [500, 900, 1200];
    const [isRunning , setIsRunning] = useState(false);
    useEffect(()=>{

    },)

    return(
        <SafeAreaView>
            <Text> </Text>
            <Text> </Text>++++++++++
            <Text> </Text>
        <View/>

        <View>
            <Text>Task</Text>
        </View>  

        <TouchableOpacity>
            <Text>Start</Text>
        </TouchableOpacity>


        <TouchableOpacity>
            <Text>Back</Text>
        </TouchableOpacity>

        </SafeAreaView>
        

    )
}

const styles = StyleSheet.create({})