import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default class Media extends Component {

  constructor() {
    super();
    this.state = {
      marcas: "",
      modelos: "",
      marcaSelect: "",
      ModeloSelect: "",
      AnoModeloSelect: 0,
      Valor: "",
      Marca: "",
      Modelo: "",
      AnoModelo: 0,
      Combustivel: "",
      CodigoFipe: "",
      MesReferencia: "",
      TipoVeiculo: 0,
      SiglaCombustivel: ""
    }
  }

  SearchCar() {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          marcas: data,
        })
      })
  }
  componentDidMount() {
    this.SearchCar()
  }

  render() {
    return (
      <View>
        <View style={styles.form}>
        <Text style={styles.text}>Selecione a Marca do Carro</Text>
          <FlatList
            data={this.state.marcas}
            renderItem={
              ({ item }) =>
                <View >
                  <Button
                    title={item.nome}
                    onPress={() => this.props.navigation.navigate('Modelos', {
                      marca: item.codigo
                    })}
                  />
                </View>}
            keyExtractor={item => item.nome}
          />
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
    marginLeft: 5,
    marginTop: 15,
    marginVertical: 10
  }
})