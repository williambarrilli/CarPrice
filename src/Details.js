import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            Valor: "",
            Marca: "",
            Modelo: "",
            AnoModelo: "",
            Combustivel: "",
            CodigoFipe: "",
            MesReferencia: ""
        }
    }

    SearchInfo() {
        const { navigation } = this.props;
        const modelo = navigation.getParam('modelo', 0);
        const marca = navigation.getParam('marca', 0);
        const ano = navigation.getParam('ano', 0);
        fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    Valor: data.Valor,
                    Marca: data.Marca,
                    Modelo: data.Modelo,
                    AnoModelo: data.AnoModelo,
                    Combustivel: data.Combustivel,
                    CodigoFipe: data.CodigoFipe,
                    MesReferencia: data.MesReferencia,
                })
            })
    }

    redirectHome() {
        this.props.navigation.navigate('Home')
    }

    componentDidMount() {
        this.SearchInfo()
    }
    render() {
        return (
            <View>
                <View style={styles.form}>
                    <Text style={styles.text}>Detalhes do Carro</Text>
                    <FlatList
                        data={[
                            {
                                key: 'Valor: ',
                                value: `${this.state.Valor}`
                            },
                            {
                                key: 'Marca: ',
                                value: `${this.state.Marca}`
                            },
                            {
                                key: 'Ano Modelo: ',
                                value: `${this.state.AnoModelo}`
                            },
                            {
                                key: 'Modelo: ',
                                value: `${this.state.Modelo}`
                            },
                            {
                                key: 'Combustivel: ',
                                value: `${this.state.Combustivel}`
                            },
                            {
                                key: 'Mês Referência: ',
                                value: `${this.state.MesReferencia}`
                            },
                            {
                                key: 'CodigoFipe: ',
                                value: `${this.state.CodigoFipe}`
                            }
                        ]}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => <Text style={{ opacity: 1, margin: 10, fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
                            {item.key}{item.value}
                        </Text>}
                    /></View>
                <Button
                    title="Voltar ao Inicio"
                    onPress={this.redirectHome.bind(this)}
                />
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