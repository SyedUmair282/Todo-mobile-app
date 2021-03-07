import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity } from 'react-native';

export default function Todo() {
  // const DATA = [
  //   {
  //     title: 'First Item',
  //   },
  //   {
  //     title: 'Second Item',
  //   }
  // ];
  const [DATA,setdata]=useState([]);
  const [values,setvalue]=useState();

  const delete_todo=(i)=>{
    const temp=[...DATA]
    temp.splice(i,1)
    setdata(temp)
  }

  const add_todo=()=>{
    setdata([...DATA,values]);
    setvalue("")
  }
  
  return (
    <View style={styles.container}>
      
      
      <Text style={{fontSize:20,paddingTop:10,paddingBottom:10,textAlign:'center',backgroundColor:'purple',fontWeight:'bold'}}>"Todo List"</Text>


      <ScrollView>
        <View style={{marginBottom:115}}>
        {DATA.map((v,i)=>{
         return <View key={i} style={styles.input}>
          <Text style={styles.text}>{v}</Text>
          <TouchableOpacity onPress={()=>delete_todo(i)} style={styles.del} activeOpacity={0.5}>
          <Text style={{fontSize:18}}>Del</Text>
          </TouchableOpacity>  
        </View>
        })}
        </View>
        

      {/* <FlatList style={{marginBottom:50}} data={DATA} renderItem={(data)=>{
        return <View style={styles.input}>
          <Text style={styles.text}>{data.item.title}</Text>
          <TouchableOpacity style={styles.del} activeOpacity={0.5}>
          <Text style={{fontSize:18}}>Del</Text>
          </TouchableOpacity>  
        </View>
      }}
      /> */}
      </ScrollView>


      <View style={styles.position}>
      <TextInput value={values} onChangeText={(text)=>setvalue(text)} maxLength={13}  placeholder="Enter your todos...." style={{height: 40,
      borderColor: '#8576bb', borderWidth: 2, 
      width:360,
      backgroundColor:'#8576bb',
      fontSize:20
      }}/>
      </View>


      <TouchableOpacity disabled={values?false:true} onPress={add_todo}  style={styles.add} activeOpacity={0.8}>
        <Text style={{fontSize:20}}>Add</Text>
      </TouchableOpacity>
      
      
    </View>

  );
}

const styles = StyleSheet.create({
  add:{
    backgroundColor:"blue",
    height:50,
    alignItems:'center',
    justifyContent:'center',
    width:70,
    borderRadius:100,
    position:"absolute",
    bottom:54,
    right:20,
    zIndex:10
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  input:{
    fontSize:25,
    backgroundColor:"#fff",
    width:"80%",
    height:50,
    marginTop:20,
    borderWidth:2,
    paddingTop:6,
    borderRadius:8,
    marginLeft:35,
    paddingLeft:5,
    borderLeftColor:"red",
    borderLeftWidth:5,
    borderTopColor:"lightgray",
    borderBottomColor:"lightgray",
    borderRightColor:"lightgreen",
    flexDirection:"row"
  },
  position:{
    position:"absolute",
    bottom:0,
    left:0,
    right:0,
    zIndex:10
  },
  text:{
    marginTop:4,
    fontSize:18
  },
  del:{
    borderWidth:2,
    width:35,
    height:48,
    marginTop:-2,
    position:"absolute",
    left:248,
    top:1,
    borderRadius:8,
    paddingTop:8,
    borderColor:"lightgreen",
    alignItems:"center",
    backgroundColor:"lightgreen"
  }
  
});