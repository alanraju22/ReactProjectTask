import React, {Component} from 'react';
import {
    StyleSheet,
    Text, View, TouchableOpacity, Vibration, TextInput, ScrollView, Button, FlatList} from 'react-native';

class Home extends Component {
    constructor()
    {
        super();
        this.state={
            name:' ',
            mobile:' ',
            email:' ',
            age:' ',
            address:' '
        }
    }



    
    submit() {
        let collection={}
        collection.name=this.state.name,
        collection.mobile=this.state.mobile,
        collection.email=this.state.email,
        collection.age=this.state.age,
        collection.address=this.state.address
        console.warn(collection);



        
        fetch('http://localhost:44382/api/Index/Post',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(collection),
            })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }
    render() {
        return (<ScrollView>
            <View>
                <Text style={{fontWeight:'bold', fontSize:20, padding:10, margin:10}}>Student Details</Text>
              
                  <TextInput
                  placeholder="Enter Name"
                  onChangeText={(name) => { this.setState({name })}}
                  style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                  />
                  <TextInput
                  placeholder="Enter Mobile Number"
                  onChangeText={(mobile) => { this.setState({ mobile })}}
                  style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                  />
                  <TextInput
                  placeholder="Enter Email"
                  onChangeText={(email) => { this.setState({ email })}}
                  style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                  />
                  <TextInput
                  placeholder="Enter Age"
                  onChangeText={(age) => { this.setState({ age })}}
                  style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                  />
                  <TextInput
                  placeholder="Enter Address"
                  onChangeText={(address) => { this.setState({ address })}}
                  style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                  />
                  <Button title="SUBMIT" onPress={() =>this.submit()}></Button>
              
                  </View>
                  
                  {/* <View style ={styles.listWrapper}>
                  <Text style={styles.row}>Name</Text>
                  <Text style={styles.row}>Mobile</Text>
                  <Text style={styles.row}>Email</Text>
                  <Text style={styles.row}>Age</Text>
                  <Text style={styles.row}>Address</Text>      
                  <Text style={styles.row}>Action</Text>       
                  </View>
                  <FlatList
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
                    </View>}
             /> */}
            
            </ScrollView>
            )
      }

}

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

export default Home;