import React, { useContext, useEffect } from 'react';
import { Checkbox } from 'react-native-paper';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { SuspeitoContext } from './context/SuspeitoContext';
import AsyncStorage from '@react-native-async-storage/async-storage'
  
  export default function Armas() {
    const{status}= useContext(SuspeitoContext);
    useEffect(()=>{if(status == true){redefinir()}},[status])
  
    const [Veneno, setVeneno] = React.useState(false);
    const [Abajur, setAbajur] = React.useState(false);
    const [Revolver, setRevolver] = React.useState(false);
    const [Faca, setFaca] = React.useState(false);
    const [Tesoura, setTesoura] = React.useState(false);
    const [Chave, setChave] = React.useState(false);
    const [Martelo, setMartelo] = React.useState(false);
  
    const [Textos, setTextos] = React.useState({
      Veneno:'',Abajur:'',Revolver:'', Faca:'', Tesoura:'', Chave:'', Martelo:''
    });
  
    function changeText(texto,chave, key){
      let newTextos = {}
      setStorange(key,texto);
      switch(chave){
        case 1:
          newTextos={
            Veneno:texto,
            Abajur:Textos.Abajur,
            Revolver:Textos.Revolver, 
            Faca:Textos.Faca, 
            Tesoura:Textos.Tesoura, 
            Chave:Textos.Chave, 
            Martelo:Textos.Martelo
          }
          break
  
        case 2:
          newTextos={
            Veneno:Textos.Veneno,
            Abajur:texto,
            Revolver:Textos.Revolver, 
            Faca:Textos.Faca, 
            Tesoura:Textos.Tesoura, 
            Chave:Textos.Chave, 
            Martelo:Textos.Martelo
          }
          break
          case 3:
          newTextos={
            Veneno:Textos.Veneno,
            Abajur:Textos.Abajur,
            Revolver:texto, 
            Faca:Textos.Faca, 
            Tesoura:Textos.Tesoura, 
            Chave:Textos.Chave, 
            Martelo:Textos.Martelo
          }
          break
          case 4:
          newTextos={
            Veneno:Textos.Veneno,
            Abajur:Textos.Abajur,
            Revolver:Textos.Revolver, 
            Faca:texto, 
            Tesoura:Textos.Tesoura, 
            Chave:Textos.Chave, 
            Martelo:Textos.Martelo
          }
          break
          case 5:
          newTextos={
            Veneno:Textos.Veneno,
            Abajur:Textos.Abajur,
            Revolver:Textos.Revolver, 
            Faca:Textos.Faca, 
            Tesoura:texto, 
            Chave:Textos.Chave, 
            Martelo:Textos.Martelo
          }
          break
          case 6:
          newTextos={
            Veneno:Textos.Veneno,
            Abajur:Textos.Abajur,
            Revolver:Textos.Revolver, 
            Faca:Textos.Faca, 
            Tesoura:Textos.Tesoura, 
            Chave:texto, 
            Martelo:Textos.Martelo
          }
          break
          case 7:
          newTextos={
            Veneno:Textos.Veneno,
            Abajur:texto,
            Revolver:Textos.Revolver, 
            Faca:Textos.Faca, 
            Tesoura:Textos.Tesoura, 
            Chave:Textos.Chave, 
            Martelo:texto
          }  
      }
      setTextos(newTextos);
    }
  
    async function getStoranged(){
      let Array ={}
      const keys = ['Veneno','Abajur','Revolver', 'Faca', 'Tesoura', 'Chave', 'Martelo'];
      await(await AsyncStorage.multiGet(keys)).map(value=>{
        Array[value[0]]=value[1]
      });
      setTextos(Array);
  
  
    }
  
    async function getStorangedBooleans(){
      const keys = ['VenenoB','AbajurB','RevolverB', 'FacaB', 'TesouraB', 'ChaveB', 'MarteloB'];
      await(await AsyncStorage.multiGet(keys)).map(value=>{

        switch(value[0]){
          case'VenenoB':
            setVeneno(value[1]=='true')
            break
          case'AbajurB':
            setAbajur(value[1]=='true')
            break
          case'RevolverB':
            setRevolver(value[1]=='true')
            break
          case'FacaB': 
            setFaca(value[1]=='true')
            break
          case'TesouraB':
            setTesoura(value[1]=='true')
            break
          case'ChaveB':
            setChave(value[1]=='true')
            break
          case'MarteloB':
            setMartelo(value[1]=='true')
            break
        }
      });
  
  
    }
    useEffect(()=>{
      try{
      getStoranged()
      getStorangedBooleans()
      }catch(e){}
    
    },[])
  
    function setStorange(key,value){
      AsyncStorage.setItem(key,value)
      getStoranged()
    }
    
    function redefinir(){
      setVeneno(false);
      setAbajur(false);
      setRevolver(false);
      setFaca(false);
      setTesoura(false);
      setChave(false);
      setMartelo(false); 
      setTextos({Veneno:'',Abajur:'',Revolver:'', Faca:'', Tesoura:'', Chave:'', Martelo:''})
      AsyncStorage.multiSet([['Veneno',''],['Abajur',''],['Revolver',''],['Faca',''],
    ['Tesoura',''],['Chave',''],['Martelo',''],['VenenoB','false'],['AbajurB','false'],['RevolverB','false'], 
    ['FacaB','false'], ['MarteloB','false'], ['TesouraB','false'], ['ChaveB','false']])
    }
  
    return (
      <View style={styles.Armas}>
        <Text style={styles.titulo}>Armas</Text>
        <View style={styles.box}> 
        <Checkbox
          status={Veneno ? 'checked' : 'unchecked'}
          onPress={() => {
            setVeneno(!Veneno);
            setStorange('VenenoB', `${!Veneno}`)
        }}/>
        <TextInput value={Textos.Veneno} 
        onChangeText={text=>changeText(text,1, 'Veneno')} style={styles.input}/>
  
        <Text style={styles.texto}>Veneno</Text>
        </View>
  
        <View style={styles.box1}>
        <Checkbox
          status={Abajur ? 'checked' : 'unchecked'}
          onPress={() => {
            setAbajur(!Abajur);
            setStorange('AbajurB', `${!Abajur}`)
        }}/>
        <TextInput value={Textos.Abajur} 
        onChangeText={text=>changeText(text,2, 'Abajur')} style={styles.input}/>
        <Text style={styles.texto}>Abajur</Text>
        </View>
  
  
  
        <View style={styles.box}>
        <Checkbox
          status={Revolver ? 'checked' : 'unchecked'}
          onPress={() => {
            setRevolver(!Revolver);
            setStorange('RevolverB', `${!Revolver}`)
        }}/>
        <TextInput value={Textos.Revolver} 
        onChangeText={text=>changeText(text,3, 'Revolver')} style={styles.input}/>
  
        <Text style={styles.texto}>Revolver</Text>
        </View>
  
  
        <View style={styles.box1}> 
        <Checkbox
          status={Faca ? 'checked' : 'unchecked'}
          onPress={() => {
            setFaca(!Faca);
            setStorange('FacaB', `${!Faca}`)
        }}/>
        <TextInput value={Textos.Faca} 
        onChangeText={text=>changeText(text,4, 'Faca')} style={styles.input}/>
        <Text style={styles.texto}>Faca</Text>
        </View>
  
  
  
        <View style={styles.box}> 
        <Checkbox
          status={Tesoura ? 'checked' : 'unchecked'}
          onPress={() => {
            setTesoura(!Tesoura);
            setStorange('TesouraB', `${!Tesoura}`)
        }}/>
        <TextInput value={Textos.Tesoura} 
        onChangeText={text=>changeText(text,5, 'Tesoura')} style={styles.input}/>
        <Text style={styles.texto}>Tesoura</Text>
        </View>
  
  
  
        <View style={styles.box1}> 
        <Checkbox
          status={Chave ? 'checked' : 'unchecked'}
          onPress={() => {
            setChave(!Chave);
            setStorange('ChaveB', `${!Chave}`)
        }}/>
        <TextInput value={Textos.Chave} 
        onChangeText={text=>changeText(text,6, 'Chave')} style={styles.input}/>
        <Text style={styles.texto}>Chave</Text>
        </View>
  
  
  
        <View style={styles.box}> 
        <Checkbox
          status={Martelo ? 'checked' : 'unchecked'}
          onPress={() => {
            setMartelo(!Martelo);
            setStorange('MarteloB', `${!Martelo}`)
        }}/>
        <TextInput value={Textos.Martelo} 
        onChangeText={text=>changeText(text,7, 'Martelo')} style={styles.input}/>
        <Text style={styles.texto}>Martelo</Text>
        </View>
  
  
  
        <View style={styles.botao}>
        </View>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    box:{
      backgroundColor:'#ad9d8c', 
      flexDirection:'row',
      justifyContent:'space-between'
    },
    texto:{
      alignSelf: "center",
      paddingLeft: 10,
      paddingRight:10
    },
    box1:{
      backgroundColor:'#e4dacf', 
      flexDirection:'row',
      justifyContent:'space-between'
  
    },
    Armas:{
      borderRadius: 20,
      borderWidth: 2,
      padding: 10,
      borderColor: 'black',
      backgroundColor: 'white'
    },
    titulo:{
      textAlign:"center",
      paddingBottom: 5
    },
    botao:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop: 5
    },
    input:{
      flex:1,
      borderBottomWidth:1,
      height:'80%',
      fontSize:20,
      alignSelf: "center",
  
    }
  }
  );