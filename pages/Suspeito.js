
import React, { useContext, useEffect } from 'react';
import { Checkbox } from 'react-native-paper';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { SuspeitoContext } from './context/SuspeitoContext';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Suspeito() {
  const{status}= useContext(SuspeitoContext);
  useEffect(()=>{if(status == true){redefinir()}},[status])


  const [Motorista, setMotorista] = React.useState(false);
  const [Empregada, setEmpregada] = React.useState(false);
  const [Vizinho, setVizinho] = React.useState(false);
  const [Mordomo, setMordomo] = React.useState(false);
  const [Cozinheiro, setCozinheiro] = React.useState(false);
  const [Esposa, setEsposa] = React.useState(false);
  const [Jardineiro, setJardineiro] = React.useState(false);

  const [Textos, setTextos] = React.useState({
    Motorista:'',Empregada:'',Vizinho:'', Mordomo:'', Cozinheiro:'', Esposa:'', Jardineiro:''
  });

  function changeText(texto,chave, key){
    let newTextos = {}
    setStorange(key,texto);
    switch(chave){
      case 1:
        newTextos={
          Motorista:texto,
          Empregada:Textos.Empregada,
          Vizinho:Textos.Vizinho, 
          Mordomo:Textos.Mordomo, 
          Cozinheiro:Textos.Cozinheiro, 
          Esposa:Textos.Esposa, 
          Jardineiro:Textos.Jardineiro
        }
        break

      case 2:
        newTextos={
          Motorista:Textos.Motorista,
          Empregada:texto,
          Vizinho:Textos.Vizinho, 
          Mordomo:Textos.Mordomo, 
          Cozinheiro:Textos.Cozinheiro, 
          Esposa:Textos.Esposa, 
          Jardineiro:Textos.Jardineiro
        }
        break
        case 3:
        newTextos={
          Motorista:Textos.Motorista,
          Empregada:Textos.Empregada,
          Vizinho:texto, 
          Mordomo:Textos.Mordomo, 
          Cozinheiro:Textos.Cozinheiro, 
          Esposa:Textos.Esposa, 
          Jardineiro:Textos.Jardineiro
        }
        break
        case 4:
        newTextos={
          Motorista:Textos.Motorista,
          Empregada:Textos.Empregada,
          Vizinho:Textos.Vizinho, 
          Mordomo:texto, 
          Cozinheiro:Textos.Cozinheiro, 
          Esposa:Textos.Esposa, 
          Jardineiro:Textos.Jardineiro
        }
        break
        case 5:
        newTextos={
          Motorista:Textos.Motorista,
          Empregada:Textos.Empregada,
          Vizinho:Textos.Vizinho, 
          Mordomo:Textos.Mordomo, 
          Cozinheiro:texto, 
          Esposa:Textos.Esposa, 
          Jardineiro:Textos.Jardineiro
        }
        break
        case 6:
        newTextos={
          Motorista:Textos.Motorista,
          Empregada:Textos.Empregada,
          Vizinho:Textos.Vizinho, 
          Mordomo:Textos.Mordomo, 
          Cozinheiro:Textos.Cozinheiro, 
          Esposa:texto, 
          Jardineiro:Textos.Jardineiro
        }
        break
        case 7:
        newTextos={
          Motorista:Textos.Motorista,
          Empregada:texto,
          Vizinho:Textos.Vizinho, 
          Mordomo:Textos.Mordomo, 
          Cozinheiro:Textos.Cozinheiro, 
          Esposa:Textos.Esposa, 
          Jardineiro:texto
        }  
    }
    setTextos(newTextos);
  }

  async function getStoranged(){
    let Array ={}
    const keys = ['Motorista','Empregada','Vizinho', 'Mordomo', 'Cozinheiro', 'Esposa', 'Jardineiro'];
    await(await AsyncStorage.multiGet(keys)).map(value=>{
      Array[value[0]]=value[1]
    });
    setTextos(Array);


  }

  async function getStorangedBooleans(){
    const keys = ['MotoristaB','EmpregadaB','VizinhoB', 'MordomoB', 'CozinheiroB', 'EsposaB', 'JardineiroB'];
    await(await AsyncStorage.multiGet(keys)).map(value=>{
      
      switch(value[0]){
        case'MotoristaB':
          setMotorista(value[1]=='true')
          break
        case'EmpregadaB':
          setEmpregada(value[1]=='true')
          break
        case'VizinhoB':
          setVizinho(value[1]=='true')
          break
        case'MordomoB': 
          setMordomo(value[1]=='true')
          break
        case'CozinheiroB':
          setCozinheiro(value[1]=='true')
          break
        case'EsposaB':
          setEsposa(value[1]=='true')
          break
        case'JardineiroB':
          setJardineiro(value[1]=='true')
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
    setMotorista(false);
    setEmpregada(false);
    setVizinho(false);
    setMordomo(false);
    setCozinheiro(false);
    setEsposa(false);
    setJardineiro(false); 
    setTextos({Motorista:'',Empregada:'',Vizinho:'', Mordomo:'', Cozinheiro:'', Esposa:'', Jardineiro:''})
    AsyncStorage.multiSet([['Motorista',''],['Empregada',''],['Vizinho',''],['Mordomo',''],
    ['Esposa',''],['Jardineiro',''],['Cozinheiro',''],['MotoristaB','false'],['EmpregadaB','false'],['VizinhoB','false'], 
    ['MordomoB','false'], ['CozinheiroB','false'], ['EsposaB','false'], ['JardineiroB','false']])
  }

  return (
    <View style={styles.suspeito}>
      <Text style={styles.titulo}>Pessoas</Text>
      <View style={styles.box}> 
      <Checkbox
        status={Motorista ? 'checked' : 'unchecked'}
        onPress={() => {
          setMotorista(!Motorista);
          setStorange('MotoristaB', `${!Motorista}`)
      }}/>
      <TextInput value={Textos.Motorista} 
      onChangeText={text=>changeText(text,1, 'Motorista')} style={styles.input}/>

      <Text style={styles.texto}>Motorista</Text>
      </View>

      <View style={styles.box1}>
      <Checkbox
        status={Empregada ? 'checked' : 'unchecked'}
        onPress={() => {
          setEmpregada(!Empregada);
          setStorange('EmpregadaB', `${!Empregada}`)
      }}/>
      <TextInput value={Textos.Empregada} 
      onChangeText={text=>changeText(text,2, 'Empregada')} style={styles.input}/>
      <Text style={styles.texto}>Empregada</Text>
      </View>



      <View style={styles.box}>
      <Checkbox
        status={Vizinho ? 'checked' : 'unchecked'}
        onPress={() => {
          setVizinho(!Vizinho);
          setStorange('VizinhoB', `${!Vizinho}`)
      }}/>
      <TextInput value={Textos.Vizinho} 
      onChangeText={text=>changeText(text,3, 'Vizinho')} style={styles.input}/>

      <Text style={styles.texto}>Vizinho</Text>
      </View>


      <View style={styles.box1}> 
      <Checkbox
        status={Mordomo ? 'checked' : 'unchecked'}
        onPress={() => {
          setMordomo(!Mordomo);
          setStorange('MordomoB', `${!Mordomo}`)
      }}/>
      <TextInput value={Textos.Mordomo} 
      onChangeText={text=>changeText(text,4, 'Mordomo')} style={styles.input}/>
      <Text style={styles.texto}>Mordomo</Text>
      </View>



      <View style={styles.box}> 
      <Checkbox
        status={Cozinheiro ? 'checked' : 'unchecked'}
        onPress={() => {
          setCozinheiro(!Cozinheiro);
          setStorange('CozinheiroB', `${!Cozinheiro}`)
      }}/>
      <TextInput value={Textos.Cozinheiro} 
      onChangeText={text=>changeText(text,5, 'Cozinheiro')} style={styles.input}/>
      <Text style={styles.texto}>Cozinheiro</Text>
      </View>



      <View style={styles.box1}> 
      <Checkbox
        status={Esposa ? 'checked' : 'unchecked'}
        onPress={() => {
          setEsposa(!Esposa);
          setStorange('EsposaB', `${!Esposa}`)
      }}/>
      <TextInput value={Textos.Esposa} 
      onChangeText={text=>changeText(text,6, 'Esposa')} style={styles.input}/>
      <Text style={styles.texto}>Esposa</Text>
      </View>



      <View style={styles.box}> 
      <Checkbox
        status={Jardineiro ? 'checked' : 'unchecked'}
        onPress={() => {
          setJardineiro(!Jardineiro);
          setStorange('JardineiroB', `${!Jardineiro}`)
      }}/>
      <TextInput value={Textos.Jardineiro} 
      onChangeText={text=>changeText(text,7, 'Jardineiro')} style={styles.input}/>
      <Text style={styles.texto}>Jardineiro</Text>
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
  suspeito:{
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