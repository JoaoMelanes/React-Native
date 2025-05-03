import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function RootLayout() {

  return(
    <>
    <StatusBar barStyle='light-content' backgroundColor="black"/>
    <Stack
    screenOptions={
      {
      headerStyle: {backgroundColor: 'black'},
      headerTintColor: "white",
      // headerShown: false
      }
    }>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name='+not-found' options={{headerTitle: "Not Found"}} />
    </Stack>
    </>
  )
}
