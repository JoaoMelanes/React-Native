import { Text, View } from "react-native";
import { styles } from "../../styles/styles"
import { Link } from "expo-router";

export default function Products(){

    return(
        <View style={[styles.container, {backgroundColor: "white"}]}>
            <Text>Products</Text>
                <Link push href={'/products/1'}>Ir para 1➡</Link>
                <Link push href={'/products/2'}>Ir para 2➡</Link>
        </View>
    )
}