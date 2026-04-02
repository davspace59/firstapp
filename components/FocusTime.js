import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'

export default function FocusTime({onBack}) {
    const time = [500, 900, 1200];
    const [isRunning, setIsRunning] = useState(false);

    return (
        <SafeAreaView>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <View />

            <View>
                <Text>Task</Text>
            </View>

            <TouchableOpacity>
                <Text>Start</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onBack}>
                <Text>Back</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})