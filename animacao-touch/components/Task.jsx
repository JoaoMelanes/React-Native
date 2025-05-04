import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";

export default function Task ({text, initialCompleted, deleteTask}) {
    const [completed, setCompleted] = useState(initialCompleted)
    const swipe = new Animated.Value(0)

    const flingGesture = Gesture.Fling().direction(Gesture.DIRECTION_RIGHT).onEnd(
        () => { Animated.timing(swipe, { toValue: 500, duration: 300}).start(() => {deleteTask()})})

    return ( 
        <GestureDetector gesture={flingGesture}>
            <Animated.View style={[style.rowContainer, {transform: [{translateX:swipe}]}]}>
                <Pressable onPress={() => setCompleted(!completed)}>
                <Ionicons
                name="checkmark-circle"
                size={32}
                color={completed ? "#32ba7c" : "#ccc"}
                /> 
                </Pressable>
                <Text>{text}</Text>  
            </Animated.View>
        </GestureDetector>
    )
}

const style = StyleSheet.create({
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
        elevation: 3, //android
        shadowColor: "#000", //IOS
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 2},
        padding: 10,
        borderRadius: 10
    }
})