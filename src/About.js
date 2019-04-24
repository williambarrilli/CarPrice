import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
export default class About extends Component {
  render() {
    return (
      <View>
        <View style={styles.form}>
          <Text style={styles.text}>Sobre</Text>
          <Text> APP Desenvolvido na Disciplina de React Native do Curso de Ciências da computação da Faculdade IMED.</Text>
          <Text>Criador: William Barrilli</Text>
          <Text>Linkedin: linkedin.com/williambarrilli/  </Text>
          <ImageBackground source={require('../assets/img.jpeg')} style={{ width: '80%', height: '80%', marginLeft: '15%' }}>
          </ImageBackground>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '110%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    opacity: 0.8,
    backgroundColor: "#bababa",
    borderRadius: 5
  },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 130,
    marginTop: 15,
    marginVertical: 10
  }
})