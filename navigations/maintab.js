import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
const Tab=createBottomTabNavigator();
const MainTabNavigation =()=>{
  return (
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? require("../src/img/home_purple.png")
            : require('../src/img/home_black.png');
        } else if (route.name === 'Diary') {
          iconName = focused 
          ? require("../src/img/eat_purple.png")
          : require('../src/img/eat_black.png');
        }
        else if(route.name === 'Report'){
          iconName = focused 
          ? require("../src/img/report_purple.png")
          : require('../src/img/report_black.png');

        }
        else if(route.name === 'Me'){
          iconName = focused 
          ? require("../src/img/person_purple.png")
          : require('../src/img/person_black.png');

        }
        // You can return any component that you like here!
        return <Image source={iconName} style={{width:25,height:25}} />;
      },
    })}
        
        
        tabBarOptions={{
          activeTintColor: '#763BE54A',
          inactiveTintColor: '#ACACAC',
          style:{
            backgroundColor:'#fff',
            height:90
          }
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Diary" component={HomeScreen}/>
            <Tab.Screen name="Report" component={HomeScreen}/>
            <Tab.Screen name="Me" component={HomeScreen}/>
          </Tab.Navigator>
      )
    }




export default MainTabNavigation;