import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default class Modelos extends Component {

    constructor() {
        super();
        this.state = {
            modelos: "",
            marca: ""
        }
    }

    SearchModelo() {
        const { navigation } = this.props;
        const marca = navigation.getParam('marca', 0);
        fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    modelos: data.modelos,
                })
            })
        this.setState({
            marca: marca
        })
    }
    componentDidMount() {
        this.SearchModelo()
    }

    render() {
        return (
            <View>
                <View style={styles.form}>
                <Text style={styles.text}>Selecione o Modelo do Carro</Text>
                    <FlatList
                        data={this.state.modelos}
                        renderItem={
                            ({ item }) =>
                                <View >
                                    <Button
                                        title={item.nome}
                                        onPress={() => this.props.navigation.navigate('Ano', {
                                            modelo: item.codigo,
                                            marca: this.state.marca
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