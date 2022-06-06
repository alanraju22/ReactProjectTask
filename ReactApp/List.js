 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

  import React, {useState,useEffect}from 'react';
  import {
      View,
      Text,
      StyleSheet,
      FlatList,
  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
  
  const App = () => {
      const [students, setStudents]=useState([]);
      useEffect(()=>{
          fetch("http://localhost:44382/api/Index/GetData").then((data)=>{
              data.json().then((result) => {
                  setStudents(result);
              });
          });
      },[]);
      return (
          <View style={styles.body}>
           <View style ={styles.listWrapper}>
                         <Text style={styles.row}>UserName</Text>
                         <Text style={styles.row}>Mobile</Text>
                         <Text style={styles.row}>Email</Text>
                         <Text style={styles.row}>Age</Text>
                         <Text style={styles.row}>Address</Text>      
                         <Text style={styles.row}>Action</Text>       
           </View>
              <FlatList
                  data={students}
                  rendorItem={({item}) => 
                      <View style={styles.listWrapper}>
                          <Text style={styles.row}>{item.name}</Text>
                          <Text style={styles.row}>{item.mobile}</Text>
                          <Text style={styles.row}>{item.email}</Text>
                          <Text style={styles.row}>{item.age}</Text>
                          <Text style={styles.row}>{item.address}</Text>
                          <Text style={styles.row}><RoundIconBtn
                                antIconName='delete'
                                style={{backgroundColor: Colors.ERROR, marginBottom: 15}}
                                onPress={() => deletePost(item.id)}/> </Text>
                      </View>
    
                   }
               />
          </View>
      );
    };

    
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e',
      },
      student:{
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
      },
      body:{
       backgroundColor: '#fff',
       flex:1
     },
     listWrapper:{
       flexDirection: 'row',
       flexWrap: 'wrap',
       borderBottomWidth: .5
     },
     row:{
       backgroundColor: '#fff',
       flex: 1,
       fontSize: 13,
       paddingHorizontal: 2,
       paddingVertical:10
     }
    });
   
    export default App


    // <TextInput label={"Student Name"} value={name} onChangeText={setName}/>
    // <TextInput label={"Mobile"} value={mobile} onChangeText={setMobile}/>
    // <TextInput label={"Email"} value={email} onChangeText={setEmail}/>
    // <TextInput label={"Age"} value={age} onChangeText={setAge}/>
    // <TextInput label={"Address"} value={address} onChangeText={setAddress}/> 
    