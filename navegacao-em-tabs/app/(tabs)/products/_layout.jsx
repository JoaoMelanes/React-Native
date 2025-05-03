import { Stack } from "expo-router"

export default function ProductLayout(){
    return(
        <Stack screenOptions={{
            headerStyle: {backgroundColor: "black"},
            headerTintColor: "white",
        }}>
            <Stack.Screen name="index" options={{ headerTitle:"Produtos"}}/>
            <Stack.Screen name="products/[id]" />
        </Stack>
    )
}