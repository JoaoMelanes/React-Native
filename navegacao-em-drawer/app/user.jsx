import { Text, View } from "react-native";
import { styles } from "../styles/styles"
import { Link } from "expo-router";

export default function User(){

    return(
        <View style={[styles.container, {backgroundColor: "white"}]}>
            <Text>User</Text>
            <Link push href={'/settings'}>Ir para configuração➡</Link>
        </View>
    )
}