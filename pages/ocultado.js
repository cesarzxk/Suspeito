import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

export default function Ocultado({navigation}) {
    return (
      <View style={styled.main}>
          <Button onPress={() => navigation.navigate('Home')} title='Desocultar' />
      </View>
    )
  }

  const styled = StyleSheet.create({
    main:{
        justifyContent:'center',
        flex:1,
        backgroundColor:'black'
    }
  }
  );