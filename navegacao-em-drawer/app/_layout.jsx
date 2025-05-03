import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Drawer from 'expo-router/drawer'
import { StatusBar } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'

const CustomDrawerContent = (props) => {
  return(
    <DrawerContentScrollView>
      <DrawerItem 
        icon={({color}) => <FontAwesome size={28} name="user" color={color} />}
        label="Usuário"
        onPress={() => router.push('/user')}
      />
    </DrawerContentScrollView>
  )
}

export default function RootLayout() {

  return(
    <>
    <StatusBar barStyle='light-content' backgroundColor="black"/>
    <Drawer
    drawerContent={() => <CustomDrawerContent />}
    screenOptions={
      {
      headerStyle: {backgroundColor: 'black'},
      headerTintColor: "white",
      // headerShown: false
      }
    }>
      <Drawer.Screen name="(tabs)" options={{headerShown: false}}/>
      <Drawer.Screen name='+not-found' options={{headerTitle: "Not Found"}} />
    </Drawer>
    </>
  )
}
