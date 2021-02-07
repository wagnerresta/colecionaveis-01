import React from 'react';
import { Text,View,TouchableOpacity } from "react-native";
import estiloColecao from './estiloColecao';

function Colecao({navigation}){
    const voltar = () => {
        navigation.goBack();
    }
    return(
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>
                <Text style={estiloColecao.texto}>Coleção</Text>

                <TouchableOpacity onPress={voltar} style={estiloColecao.botaoContainer}>
                    <Text style={estiloColecao.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Colecao;