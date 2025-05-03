import { Text, View } from "react-native";
import { styles } from "../styles/styles"
import { Link } from "expo-router";

export default function Home(){

    return(
        <View style={[styles.container, {backgroundColor: "white"}]}>
            <Text>Home</Text>
            <Link push href={'/user'}>Ir para usuarios➡</Link>
            <Link push href={'/products'}>Ir para produtos➡</Link>
            <Link push href={'/error'}>Ir para error</Link>
        </View>
    )
}

