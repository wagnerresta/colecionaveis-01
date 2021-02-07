import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inicial from './src/views/Inicial/Inicial';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colecao from './src/views/Colecao/Colecao';
import Item from './src/views/Item/Item';
import Perfil from './src/views/Perfil/Perfil';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Tab   = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function rotasStack(){
  return (
    <Stack.Navigator initialRouteName="Inicial">
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
  );
}

function rotasDrawer(){
  return (
    <Drawer.Navigator initialRouteName="Inicial">
      <Drawer.Screen name="Inicial" component={rotasStack}/>
      <Drawer.Screen name="Colecao" component={Colecao}/>
      <Drawer.Screen name="Item" component={Item}/>
      <Drawer.Screen name="Perfil" component={Perfil}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        tabBarOptions={
          {
            labelStyle:{fontSize:24},
            style:{backgroundColor:'#14417b'},
            activeTintColor:'#FFF'
          }
        }
      >
        
        <Tab.Screen name="Inicial" component={rotasDrawer}/>
        <Tab.Screen name="Perfil" component={Perfil}/>
        
      </Tab.Navigator>
      
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
});
