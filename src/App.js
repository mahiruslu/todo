import React,{useState,useEffect} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Input from './Components/Input/index'
import Button from './Components/Button/index'
import Card from './Components/Card/index'

const App = () => {

  const [toDoItem, setToDoItem] = useState([])
  const [total, setTotal] = useState(toDoItem.length)
  const [addText, setAddText] = useState("")

  useEffect(()=>{
    setTotal(toDoItem.filter(item => item.completed == false).length)
  },[toDoItem])

  function handleAdd(){
    const updateToDoItem = [...toDoItem,{todo:addText,completed:true}]
    setToDoItem(updateToDoItem)
    setAddText("")
  } 
  function handleUpdate(i){
    toDoItem.indexOf(i).completed === true ? false : true
  } 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.welcome_text}>YAPILACAKLAR</Text>  
        <Text style={styles.remainTodos_text}>{total}</Text>  
      </View>
      <View style={styles.body_container}>
        <ScrollView>
          {toDoItem.map((item,i) =>
            <Card key={i} text={item.todo}  textStyle={toDoItem[i].completed ===true ? '{color:"gray"}' : null }
            onPress={console.log(toDoItem[i].completed ===true ? "{color:'gray'}" : null)}
            />
          )}
        </ScrollView>
      </View>
      <View style={styles.bottom_container}>
        <Input onChangeText={setAddText} value={addText}  placeholder="Yeni bir görev girin " />
        <Button btnName="EKLE" onPress={handleAdd}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 10,
    paddingHorizontal: 16,
    flexDirection:"column",
  },
  top_container: {
    height:40,
    flexDirection:'row',
    justifyContent:"space-between",   

  },
  body_container:{
    flex:15,
    marginVertical:5,
  },
  bottom_container:{
    height:120,
    borderColor:"gray",
    borderWidth:1,
    borderRadius:20,
    padding:10,
    marginBottom:10,
  },
  welcome_text: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"purple",
  },
  remainTodos_text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
