import React, { useContext, useEffect } from 'react';
import { Checkbox } from 'react-native-paper';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { SuspeitoContext } from './context/SuspeitoContext';
import AsyncStorage from '@react-native-async-storage/async-storage'
  
  export default function Suspeito() {
    const{status}= useContext(SuspeitoContext);
    useEffect(()=>{if(status == true){redefinir()}},[status])
  
    const [Varanda, setVaranda] = React.useState(false);
    const [Escritorio, setEscritorio] = React.useState(false);
    const [Hall_central, setHall_central] = React.useState(false);
    const [Biblioteca, setBiblioteca] = React.useState(false);
    const [Sala_de_Jantar, setSala_de_Jantar] = React.useState(false);
    const [Cozinha, setCozinha] = React.useState(false);
    const [Banheiro, setBanheiro] = React.useState(false);
    const [Suite, setSuite] = React.useState(false);
    const [Quarto, setQuarto] = React.useState(false);
    const [Escadaria, setEscadaria] = React.useState(false);

  
    const [Textos, setTextos] = React.useState({
      Varanda:'',Escritorio:'',Hall_central:'', Biblioteca:'', Sala_de_Jantar:'', Cozinha:'', Banheiro:''
    });
  
    function changeText(texto,Cozinha, key){
      let newTextos = {}
      setStorange(key,texto);
      switch(Cozinha){
        case 1:
          newTextos={
            Varanda:texto,
            Escritorio:Textos.Escritorio,
            Hall_central:Textos.Hall_central, 
            Biblioteca:Textos.Biblioteca, 
            Sala_de_Jantar:Textos.Sala_de_Jantar, 
            Cozinha:Textos.Cozinha, 
            Banheiro:Textos.Banheiro,
            Suite:Textos.Suite,
            Quarto:Textos.Quarto,
            Escadaria:Textos.Escadaria
          }
          break
  
        case 2:
          newTextos={
            Varanda:Textos.Varanda,
            Escritorio:texto,
            Hall_central:Textos.Hall_central, 
            Biblioteca:Textos.Biblioteca, 
            Sala_de_Jantar:Textos.Sala_de_Jantar, 
            Cozinha:Textos.Cozinha, 
            Banheiro:Textos.Banheiro,
            Suite:Textos.Suite,
            Quarto:Textos.Quarto,
            Escadaria:Textos.Escadaria
          }
          break
          case 3:
          newTextos={
            Varanda:Textos.Varanda,
            Escritorio:Textos.Escritorio,
            Hall_central:texto, 
            Biblioteca:Textos.Biblioteca, 
            Sala_de_Jantar:Textos.Sala_de_Jantar, 
            Cozinha:Textos.Cozinha, 
            Banheiro:Textos.Banheiro,
            Suite:Textos.Suite,
            Quarto:Textos.Quarto,
            Escadaria:Textos.Escadaria
          }
          break
          case 4:
          newTextos={
            Varanda:Textos.Varanda,
            Escritorio:Textos.Escritorio,
            Hall_central:Textos.Hall_central, 
            Biblioteca:texto, 
            Sala_de_Jantar:Textos.Sala_de_Jantar, 
            Cozinha:Textos.Cozinha, 
            Banheiro:Textos.Banheiro,
            Suite:Textos.Suite,
            Quarto:Textos.Quarto,
            Escadaria:Textos.Escadaria
          }
          break
          case 5:
          newTextos={
            Varanda:Textos.Varanda,
            Escritorio:Textos.Escritorio,
            Hall_central:Textos.Hall_central, 
            Biblioteca:Textos.Biblioteca, 
            Sala_de_Jantar:texto, 
            Cozinha:Textos.Cozinha, 
            Banheiro:Textos.Banheiro,
            Suite:Textos.Suite,
            Quarto:Textos.Quarto,
            Escadaria:Textos.Escadaria
          }
          break
          case 6:
          newTextos={
            Varanda:Textos.Varanda,
            Escritorio:Textos.Escritorio,
            Hall_central:Textos.Hall_central, 
            Biblioteca:Textos.Biblioteca, 
            Sala_de_Jantar:Textos.Sala_de_Jantar, 
            Cozinha:texto, 
            Banheiro:Textos.Banheiro,
            Suite:Textos.Suite,
            Quarto:Textos.Quarto,
            Escadaria:Textos.Escadaria
          }
          break
          case 7:
          newTextos={
            Varanda:Textos.Varanda,
            Escritorio:texto,
            Hall_central:Textos.Hall_central, 
            Biblioteca:Textos.Biblioteca, 
            Sala_de_Jantar:Textos.Sala_de_Jantar, 
            Cozinha:Textos.Cozinha, 
            Banheiro:texto,
            Suite:Textos.Suite,
            Quarto:Textos.Quarto,
            Escadaria:Textos.Escadaria
          }
          break
          case 8:
            newTextos={
              Varanda:Textos.Varanda,
              Escritorio:texto,
              Hall_central:Textos.Hall_central, 
              Biblioteca:Textos.Biblioteca, 
              Sala_de_Jantar:Textos.Sala_de_Jantar, 
              Cozinha:Textos.Cozinha, 
              Banheiro:Textos.Banheiro,
              Suite:texto,
              Quarto:Textos.Quarto,
              Escadaria:Textos.Escadaria
            }
            break
            case 9:
            newTextos={
              Varanda:Textos.Varanda,
              Escritorio:texto,
              Hall_central:Textos.Hall_central, 
              Biblioteca:Textos.Biblioteca, 
              Sala_de_Jantar:Textos.Sala_de_Jantar, 
              Cozinha:Textos.Cozinha, 
              Banheiro:Textos.Banheiro,
              Suite:Textos.Suite,
              Quarto:texto,
              Escadaria:Textos.Escadaria
            }
            break
            case 9:
            newTextos={
              Varanda:Textos.Varanda,
              Escritorio:texto,
              Hall_central:Textos.Hall_central, 
              Biblioteca:Textos.Biblioteca, 
              Sala_de_Jantar:Textos.Sala_de_Jantar, 
              Cozinha:Textos.Cozinha, 
              Banheiro:Textos.Banheiro,
              Suite:Textos.Suite,
              Quarto:Textos.Quarto,
              Escadaria:texto
            }
            break       
      }
      setTextos(newTextos);
    }
  
    async function getStoranged(){
      let Array ={}
      const keys = ['Varanda','Escritorio','Hall_central', 'Biblioteca', 'Sala_de_Jantar', 'Cozinha', 
      'Banheiro','Suite', 'Quarto', 'Escadaria']
      await(await AsyncStorage.multiGet(keys)).map(value=>{
        Array[value[0]]=value[1]
      });
      setTextos(Array);
  
  
    }
  
    async function getStorangedBooleans(){
      const keys = ['VarandaB','EscritorioB','Hall_centralB', 'BibliotecaB', 'Sala_de_JantarB', 'CozinhaB', 
      'BanheiroB','SuiteB', 'QuartoB', 'EscadariaB'];
      await(await AsyncStorage.multiGet(keys)).map(value=>{
        
        switch(value[0]){
          case'VarandaB':
            setVaranda(value[1]=='true')
            break
          case'EscritorioB':
            setEscritorio(value[1]=='true')
            break
          case'Hall_centralB':
            setHall_central(value[1]=='true')
            break
          case'BibliotecaB': 
            setBiblioteca(value[1]=='true')
            break
          case'Sala_de_JantarB':
            setSala_de_Jantar(value[1]=='true')
            break
          case'CozinhaB':
            setCozinha(value[1]=='true')
            break
          case'BanheiroB':
            setBanheiro(value[1]=='true')
            break
          case'SuiteB':
            setSuite(value[1]=='true')
            break
          case'QuartoB':
            setQuarto(value[1]=='true')
            break
          case'EscadariaB':
            setEscadaria(value[1]=='true')
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
      setVaranda(false);
      setEscritorio(false);
      setHall_central(false);
      setBiblioteca(false);
      setSala_de_Jantar(false);
      setCozinha(false);
      setBanheiro(false);

      setVaranda(false);
      setSuite(false);
      setQuarto(false);
      setEscadaria(false); 

      setTextos({Varanda:'',Escritorio:'',Hall_central:'', Biblioteca:'', Sala_de_Jantar:'', Cozinha:'',
       Banheiro:'', Suite:'', Quarto:'', Escadaria:''})

      AsyncStorage.multiSet([
        ['Varanda',''],['Escritorio',''],['Biblioteca',''],['Banheiro',''],['Sala_de_Jantar',''],
        ['Suite',''],['Quarto',''],['Hall_central',''],['Escadaria',''],['Cozinha',''],

        ['BanheiroB','false'],['Hall_centralB','false'],['VarandaB','false'],['EscritorioB','false'],
        ['BibliotecaB','false'], ['QuartoB','false'], ['Sala_de_JantarB','false'], ['SuiteB','false'],
        ['CozinhaB','false'], ['EscadariaB','false'], 
      ])
    }
  
    return (
      <View style={styles.Locais}>
        <Text style={styles.titulo}>Locais</Text>
        <View style={styles.box}> 
        <Checkbox
          status={Varanda ? 'checked' : 'unchecked'}
          onPress={() => {
            setVaranda(!Varanda);
            setStorange('VarandaB', `${!Varanda}`)
        }}/>
        <TextInput value={Textos.Varanda} 
        onChangeText={text=>changeText(text,1, 'Varanda')} style={styles.input}/>
  
        <Text style={styles.texto}>Varanda</Text>
      </View>
  
      <View style={styles.box1}>
        <Checkbox
          status={Escritorio ? 'checked' : 'unchecked'}
          onPress={() => {
            setEscritorio(!Escritorio);
            setStorange('EscritorioB', `${!Escritorio}`)
        }}/>
        <TextInput value={Textos.Escritorio} 
        onChangeText={text=>changeText(text,2, 'Escritorio')} style={styles.input}/>
        <Text style={styles.texto}>Escritorio</Text>
      </View>
  
  
  
      <View style={styles.box}>
        <Checkbox
          status={Hall_central ? 'checked' : 'unchecked'}
          onPress={() => {
            setHall_central(!Hall_central);
            setStorange('Hall_centralB', `${!Hall_central}`)
        }}/>
        <TextInput value={Textos.Hall_central} 
        onChangeText={text=>changeText(text,3, 'Hall_central')} style={styles.input}/>
  
        <Text style={styles.texto}>Hall central</Text>
      </View>
  
  
      <View style={styles.box1}> 
        <Checkbox
          status={Biblioteca ? 'checked' : 'unchecked'}
          onPress={() => {
            setBiblioteca(!Biblioteca);
            setStorange('BibliotecaB', `${!Biblioteca}`)
        }}/>
        <TextInput value={Textos.Biblioteca} 
        onChangeText={text=>changeText(text,4, 'Biblioteca')} style={styles.input}/>
        <Text style={styles.texto}>Biblioteca</Text>
      </View>
  
  
  
      <View style={styles.box}> 
        <Checkbox
          status={Sala_de_Jantar ? 'checked' : 'unchecked'}
          onPress={() => {
            setSala_de_Jantar(!Sala_de_Jantar);
            setStorange('Sala_de_JantarB', `${!Sala_de_Jantar}`)
        }}/>
        <TextInput value={Textos.Sala_de_Jantar} 
        onChangeText={text=>changeText(text,5, 'Sala_de_Jantar')} style={styles.input}/>
        <Text style={styles.texto}>Sala de Jantar</Text>
      </View>
  
  
  
      <View style={styles.box1}> 
        <Checkbox
          status={Cozinha ? 'checked' : 'unchecked'}
          onPress={() => {
            setCozinha(!Cozinha);
            setStorange('CozinhaB', `${!Cozinha}`)
        }}/>
        <TextInput value={Textos.Cozinha} 
        onChangeText={text=>changeText(text,6, 'Cozinha')} style={styles.input}/>
        <Text style={styles.texto}>Cozinha</Text>
      </View>
  
  
  
      <View style={styles.box}> 
        <Checkbox
          status={Banheiro ? 'checked' : 'unchecked'}
          onPress={() => {
            setBanheiro(!Banheiro);
            setStorange('BanheiroB', `${!Banheiro}`)
        }}/>
        <TextInput value={Textos.Banheiro} 
        onChangeText={text=>changeText(text,7, 'Banheiro')} style={styles.input}/>
        <Text style={styles.texto}>Banheiro</Text>
      </View>



      <View style={styles.box1}> 
        <Checkbox
          status={Suite ? 'checked' : 'unchecked'}
          onPress={() => {
            setSuite(!Suite);
            setStorange('SuiteB', `${!Suite}`)
        }}/>
        <TextInput value={Textos.Suite} 
        onChangeText={text=>changeText(text,5, 'Suite')} style={styles.input}/>
        <Text style={styles.texto}>Suite</Text>
      </View>
  
  
  
      <View style={styles.box}> 
        <Checkbox
          status={Quarto ? 'checked' : 'unchecked'}
          onPress={() => {
            setQuarto(!Quarto);
            setStorange('QuartoB', `${!Quarto}`)
        }}/>
        <TextInput value={Textos.Quarto} 
        onChangeText={text=>changeText(text,6, 'Quarto')} style={styles.input}/>
        <Text style={styles.texto}>Quarto</Text>
      </View>
  
  
  
      <View style={styles.box1}> 
        <Checkbox
          status={Escadaria ? 'checked' : 'unchecked'}
          onPress={() => {
            setEscadaria(!Escadaria);
            setStorange('EscadariaB', `${!Escadaria}`)
        }}/>
        <TextInput value={Textos.Escadaria} 
        onChangeText={text=>changeText(text,7, 'Escadaria')} style={styles.input}/>
        <Text style={styles.texto}>Escadaria</Text>
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
    Locais:{
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