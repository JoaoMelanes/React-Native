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
      <Stack.Screen name='index' options={{headerTitle: "Home"}} />
      <Stack.Screen name='settings' options={{headerTitle: "Configuração"}} />
      <Stack.Screen name='user' options={{headerTitle: "Usuário"}} />
      <Stack.Screen name='products' options={{headerTitle: "Produtos"}} />
      <Stack.Screen name='products/[id]' options={{headerTitle: "Detalhes"}} />
      <Stack.Screen name='+not-found' options={{headerTitle: "Not Found"}} />
    </Stack>
    </>
  )
}
