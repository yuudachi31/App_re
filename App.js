import React from 'react';
// import { View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigation from './navigations/maintab';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="FirstScreen" component={FirstScreen} />
        <Stack.Screen options={{headerShown: false}} name="SecondScreen" component={SecondScreen} />
        <Stack.Screen options={{headerShown: false}} name="ThirdScreen" component={MainTabNavigation} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

