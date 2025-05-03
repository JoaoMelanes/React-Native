import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/styles"
import { Link } from "expo-router";

export default function NotFound(){

    return(
        <View style={[styles.container, {backgroundColor: "black"}]}>
            <Text style={style.text}>404</Text>
            <Link replace href={'/'} style={style.text}>Ir para Home</Link>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        color: 'white'
    }
}) 