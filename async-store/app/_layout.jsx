import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Logo from '../assets/img/cheked.png'
import Task from "../components/Task"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function RootLayout() {

  // const initialList = [
  //   {id:1, completed: true, text: "Fazer café"},
  //   {id:2, completed: false, text: "Estudar programação"},
  //   {id:3, completed: true, text: "Comprar ração da gata"}
  // ]

  const [list, setList] = useState([])
  const [text, setText] = useState('')
  useEffect(() => {
    getListAsyncStorage = async () => {
      try{
        const jsonvalue = await AsyncStorage.getItem('list')
        return jsonvalue != null ? setList(JSON.parse(jsonvalue)) : null
      }catch(e){
        console.log(e)
      }
    }
    getListAsyncStorage()
  }, [])

  useEffect(() => {
    setListAsyncStorage = async () => {
    try{
      const jsonvalue = JSON.stringify(list)
      await AsyncStorage.setItem('list', jsonvalue)
    }catch(e){
      console.log(e)
    }
  }
  setListAsyncStorage()

  }, [list])

  const addTask = () => {
    if(!text){
      console.log("Adicione um valor!")
      return
    }
    const newList = {id: list.length + 1, completed: false, text}
    setList([...list, newList])
    setText('')
  }

  return(
    <View style={style.viewScroll}>
      <View style={style.textContainer}>
        <Image source={Logo} style={style.image}/>
        <Text style={style.title}>Minhas Tarefas</Text>
      </View>
      <View>
      <TextInput style={style.input}
        value={text}
        onChangeText={setText}
      />
        <Pressable onPress={addTask} 
        style={({pressed}) => [style.btn,{backgroundColor: pressed ? '#0ca46c' : '#32ba7c'}]}>
          <Text style={style.btn_text}>Adicionar</Text>
        </Pressable>
      </View>

      <FlatList 
      style={style.listContainer}
      data={list}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Task text={item.text} initialCompleted={item.completed}/>} 

      />
    </View>
  )
}

const style = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily:"Helvetica",
    color: '#32ba7c',
    justifyContent:"center",
    alignContent:"center",
    margin: 10
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent:"center",
  },
  viewScroll: {
    margin: 10
  },
  input: {
    height: 40,
    paddingHorizontal: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    flexGrow: 1,
    margin: 10
  },
  btn: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#32ba7c",
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
  },
  btn_text: {
    color: "white",
    fontWeight: "bold"
  },
  listContainer: {
    margin: 10,
    boxShadow: "0px 2px 3px 2px #ccc",
    padding: 10,
    borderRadius: 10
  }
})