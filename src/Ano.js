import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default class Ano extends Component {

    constructor() {
        super();
        this.state = {
            anos: "",
            modelo: "",
            marca: ""
        }
    }

    SearchAno() {
        const { navigation } = this.props;
        const modelo = navigation.getParam('modelo', 0);
        const marca = navigation.getParam('marca', 0);
        fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    anos: data
                })
            })
        this.setState({
            marca: marca,
            modelo: modelo
        })
    }
    componentDidMount() {
        this.SearchAno()
    }

    render() {
        return (
            <View>
                <View style={styles.form}>
                    <Text style={styles.text}>Selecione o Ano do Carro</Text>
                    <FlatList
                        data={this.state.anos}
                        renderItem={
                            ({ item }) =>
                                <View >
                                    <Button
                                        title={item.nome}
                                        onPress={() => this.props.navigation.navigate('Details', {
                                            ano: item.codigo,
                                            marca: this.state.marca,
                                            modelo: this.state.modelo
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