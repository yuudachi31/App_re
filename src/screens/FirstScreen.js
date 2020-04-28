import React from "react";
import { View, FlatList } from "react-native";
import Header from "../components/Header";
import FirstDetail from "../components/FirstDetail";


const FirstScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <Header
      />
    
      <FirstDetail 
             navigation={navigation}  
       
      />
     
    </View>
  );
};

export default FirstScreen;
