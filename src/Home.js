import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


export default class Home extends Component {

  redirectAbout() {
    this.props.navigation.navigate('About')
  }
  redirectMarca() {
    this.props.navigation.navigate('Marca')
  }
  render() {
    return (
      <View>
        <View style={styles.form}>
          <Text style={styles.text} >Valores Médios de Carros</Text>
          <Button
            title="Pesquisar Carros"
            onPress={this.redirectMarca.bind(this)}
          />
          <Button
            title="Sobre"
            onPress={this.redirectAbout.bind(this)}
          />
          <ImageBackground source={require('../assets/golf.jpg')} style={{ width: '100%', height: '70%' }}>
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
    marginLeft: 40,
    marginTop: 15,
    marginVertical: 10
  },
})