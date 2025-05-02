import { Text, View } from "react-native";
import { styles } from "../styles/styles"

export default function ProductDetail(){

    return(
        <View style={[styles.container, {backgroundColor: "white"}]}>
            <Text>Product Detail</Text>
        </View>
    )
}