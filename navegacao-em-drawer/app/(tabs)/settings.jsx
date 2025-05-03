import { Text, View } from "react-native";
import { styles } from "../../styles/styles"

export default function Settings(){

    return(
        <View style={[styles.container, {backgroundColor: "white"}]}>
            <Text>Settings</Text>
        </View>
    )
}