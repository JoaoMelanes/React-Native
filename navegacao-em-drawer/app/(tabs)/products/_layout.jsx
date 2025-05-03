import { DrawerToggleButton } from "@react-navigation/drawer"
import { Stack } from "expo-router"

export default function ProductLayout(){
    return(
        <Stack screenOptions={{
            headerStyle: {backgroundColor: "black"},
            headerTintColor: "white",
            headerLeft: () => <DrawerToggleButton tintColor="white"/>
        }}>
            <Stack.Screen name="index" options={{ headerTitle:"Produtos"}}/>
            <Stack.Screen name="products/[id]" />
        </Stack>
    )
}