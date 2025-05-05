import { Ionicons } from "@expo/vector-icons";
import { use, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Task ({text, initialCompleted}) {
    const [completed, setCompleted] = useState(initialCompleted)

    return ( 
    <View style={style.rowContainer}>
        <Pressable onPress={() => setCompleted(!completed)}>
        <Ionicons
                name="checkmark-circle"
                size={32}
                color={completed ? "#32ba7c" : "#ccc"}
                /> 
        </Pressable>
        <Text>{text}</Text>
    </View>
    )
}

const style = StyleSheet.create({
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
    }
})