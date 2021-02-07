import React from 'react';
import { Text,View,TouchableOpacity } from "react-native";
import estiloInicial from './estiloInicial';

function Inicial({navigation}){
    const abrirColecao = () =>{
        navigation.navigate('Colecao');
    }
    const abrirItem = () =>{
        navigation.navigate('Item');
    }

    return(
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>
                <Text style={estiloInicial.texto}>Inicial</Text>

                <TouchableOpacity onPress={abrirColecao} style={estiloInicial.botaoContainer}>
                    <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={abrirItem} style={estiloInicial.botaoContainer}>
                    <Text style={estiloInicial.botaoTexto}>Item</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Inicial;