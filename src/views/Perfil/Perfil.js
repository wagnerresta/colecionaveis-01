import React from 'react';
import { Text,View,TouchableOpacity } from "react-native";
import estiloPerfil from './estiloPerfil';

function Perfil({navigation}){
    const voltar = () =>{
        navigation.goBack();
    }
    return(
        <View style={estiloPerfil.container}>
            <View style={estiloPerfil.borda}>
                <Text style={estiloPerfil.texto}>Perfil</Text>

                <TouchableOpacity onPress={voltar} style={estiloPerfil.botaoContainer}>
                    <Text style={estiloPerfil.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Perfil;