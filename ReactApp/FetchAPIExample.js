import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, TextInput} from 'react-native';

// const getMoviesFromApi = () => {
//     console.log('Fetch API Call');

//     const requestOptions={
//         method:'GET',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             name:" ",
//             mobile:" ",
//             email:" ",
//             age:" ",
//             address:" ",
//         })
//     };

//     fetch('https://reactnative.dev/movies.json', requestOptions)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log('Fetch API Response', json.movies);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

  const postUser =() => {
    const requestOptions={
        method:'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name:" ",
            mobile:" ",
            email:" ",
            age:" ",
            address:" "
        })
    };

    fetch('http://localhost:44382/api/Index/Post', requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetch API Response', json.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  export default class FetchAPIExample extends Component{

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

      render(){
          return(<ScrollView>
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
                    <Button title="SUBMIT" onPress={() =>postUser}></Button>
                
                    </View>
                    
                  {/* <View style={{margin:10, marginTop:50, padding:20, marginHorizontal:65}}>
                      <Button
                                title='SUBMIT'
                                onPress={() => postUser()}
                                />
                  </View> */}
              
              </ScrollView>
          )
      }

    }

