import React, { useContext } from 'react';
import {ScrollView, StatusBar, StyleSheet, Button, Image, Dimensions, Alert} from 'react-native';
import Suspeito from'./Suspeito.js';
import Locais from'./Locais.js';
import Armas from'./Armas.js';
import {SuspeitoContext} from './context/SuspeitoContext.js';



export default function Home({navigation}) {

  const styled = StyleSheet.create({
    main:{
      backgroundColor: 'black'
    },
    stretch: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/3.1
  }}
  );

  const{setStatus}= useContext(SuspeitoContext);


  function ClearAll(){
    Alert.alert("Atenção","Deseja realmente limpar?",[
      {
        text:'sim',
        onPress:()=>{setStatus(true);}
      },
      {
        text:'Não',
        onPress:()=>{}
      }
    ])
    }
 
    return (
      <ScrollView style={styled.main}>
        <Image
        style={styled.stretch}
        source={require('../assets/titulo.png')}/>
        <StatusBar hidden/>
        <Button onPress={() => navigation.navigate('ocultado')} title='Ocultar' />
        <Suspeito/>
        <Armas/>
        <Locais/>
        <Button onPress={ClearAll} title='Limpar Tudo' />
      </ScrollView>
    )
  }

 