
import {StatusBar} from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

const image = {uri: "https://image.freepik.com/vector-gratis/fondo-tecnologia-futurista_52683-35442.jpg"};

export default  class App extends Component{

  state = {
    response: [],
    estado: null
    
    }
    
    handlerBuscar(t){
    
      var buscar = t;
      this.setState({value : buscar });
    
    }
    
    handlerCLick = () =>{
    
      var buscar = this.state.value;
    
     if(buscar == null ){
      axios.get("https://api.giphy.com/v1/gifs/translate?api_key=Jz1qJGUuTBQ3u62SHnq27jZce8Hy9Uz2&s=counter-strike"
      )
      .then(
        dato => {
          console.log( dato.data);
    
          this.setState({
            response: dato.data,
            estado: true
          })
          console.log(this.state)
    
        });
    
     }else{
    
      axios.get("https://api.giphy.com/v1/gifs/translate?api_key=Jz1qJGUuTBQ3u62SHnq27jZce8Hy9Uz2&s="+buscar
      )
      .then(
        dato => {
          console.log( dato.data);
    
          this.setState({
            response: dato.data,
            estado: true
          })
          console.log(this.state)
    
        });
      }
    }
    
    
    handlerCLickRandom = () =>{
    
      var gif = this.state.value;
    
      axios.get("https://api.giphy.com/v1/gifs/random?api_key=Jz1qJGUuTBQ3u62SHnq27jZce8Hy9Uz2&tag=&rating=g")
      .then(
        dato => {
          console.log( dato.data);
    
          this.setState({
            response: dato.data,
            estadoR: true
          })
          console.log(this.state)
    
        });
    
    }



  render() {
    if(this.state.estado != true && this.state.estadoR != true){
    return (
      
        <View style={styles.container}>
        
          <Text 
              style={styles.text}
              >Buscar un gif por nombre
          </Text>
          <TextInput 
              style={styles.input} placeholder='Ej: Arkanoid'
              onChangeText={this.handlerBuscar.bind(this)}>
          </TextInput>
          <TouchableOpacity
              style={styles.button}
              onPress={this.handlerCLick.bind(this)}>
              <Text>Click me</Text> 
          </TouchableOpacity>

          <Text 
              style={styles.text}
              >Buscar un gif random :) 
          </Text>
          <TouchableOpacity
              style={styles.button}
              onPress={this.handlerCLickRandom.bind(this)}>
              <Text>Click me</Text> 
          </TouchableOpacity>

          
        </View>

        );
  
      
    
        }else if(this.state.estado == true) {
          
          return (


             
        <View style={styles.container}>
          
        <Text 
            style={styles.text}
            >Buscar un gif por nombre
        </Text>
        <TextInput 
            style={styles.input} placeholder='Ej: Arkanoid'
            onChangeText={this.handlerBuscar.bind(this)}>
        </TextInput>
        <TouchableOpacity
            style={styles.button}
            onPress={this.handlerCLick.bind(this)}>
            <Text>Click me</Text> 
        </TouchableOpacity>

        <Text 
            style={styles.text}
            >Buscar un gif random :) 
        </Text>
        <TouchableOpacity
            style={styles.button}
            onPress={this.handlerCLickRandom.bind(this)}>
            <Text>Click me</Text> 
        </TouchableOpacity>

        <Image
              style={styles.logo}
              source={{uri:this.state.response.data.images.original.url}}
          />    
          
        <Text 
            style={styles.text}
            >Tipo: {this.state.response.data.type}
        </Text>

        <Text 
            style={styles.text}
            >Titulo: {this.state.response.data.title}
        </Text>

        <Text 
            style={styles.text}
            >Creador del gif: {this.state.response.data.username}
        </Text>

        <Text 
            style={styles.text}
            >Cuando lo subio: {this.state.response.data.import_datetime}
        </Text>

        <Text 
            style={styles.text}
            >Estado: {this.state.response.meta.status}
        </Text>

          
      </View>
       
           );
  
        }else{
        return (
            <View style={styles.container}>
            
            <Text 
                style={styles.text}
                >Buscar un gif por nombre
            </Text>
            <TextInput 
                style={styles.input} placeholder='Ej: Arkanoid'
                onChangeText={this.handlerBuscar.bind(this)}>
            </TextInput>
            <TouchableOpacity
                style={styles.button}
                onPress={this.handlerCLick.bind(this)}>
                <Text>Click me</Text> 
            </TouchableOpacity>
    
            <Text 
                style={styles.text}
                >Buscar un gif random :) 
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={this.handlerCLickRandom.bind(this)}>
                <Text>Click me</Text> 
            </TouchableOpacity>
    
            <Image
                  style={styles.logo}
                  source={{uri:this.state.response.data.image_url }}
              />    
              
            <Text 
                style={styles.text}
                >Tipo: {this.state.response.data.type}
            </Text>
    
            <Text 
                style={styles.text}
                >Titulo: {this.state.response.data.title}
            </Text>
    
            <Text 
                style={styles.text}
                >Creador del gif: {this.state.response.data.username}
            </Text>
    
            <Text 
                style={styles.text}
                >Cuando lo subio: {this.state.response.data.import_datetime}
            </Text>
    
            <Text 
                style={styles.text}
                >Estado: {this.state.response.meta.status}
            </Text>
      
          </View>
                   );  
  
  }
}




}

 

const styles = StyleSheet.create({
  
  button:{
    backgroundColor: "#FFFFFF",
    color:'#000000'

  },
  container:{
      flex: 1,
      backgroundColor: "#FF1212",
      alignItems: 'center',
      justifyContent: 'center',
     
      
  },
  text:{
    color:'#FFFFFF',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.dark,
    
  
  },
  sectionContainer: {
    marginTop: 150,
    paddingHorizontal: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 20
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

});

