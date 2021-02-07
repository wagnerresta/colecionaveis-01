import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inicial from './src/views/inicial/Inicial';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colecao from './src/views/Colecao/Colecao';
import Item from './src/views/Item/Item';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Inicial" 
          component={Inicial}
          options={
            {
              cardStyle: styles.screenInicial,
              headerStyle:{backgroundColor:'#14417b'},
              headerTintColor:'#FFF',
            }
          }
        />
        <Stack.Screen 
          name="Colecao" 
          component={Colecao}
          options={
            {
              cardStyle: styles.screenColecao,
              headerStyle:{backgroundColor:'#14417b'},
              headerTintColor:'#FFF',
            }
          }
        />
        <Stack.Screen 
          name="Item"
          component={Item}
          options={
            {
              cardStyle: styles.screenItem,
              headerStyle:{backgroundColor:'#14417b'},
              headerTintColor:'#FFF',
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenInicial:{
    backgroundColor:'#92afd7'
  },
  screenColecao:{
    backgroundColor:'#d0f4ea'
  },
  screenItem:{
    backgroundColor:'#d1d1d1'
  },
  /*container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },*/
});
