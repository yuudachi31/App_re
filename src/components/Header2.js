import React from "react";
import { StyleSheet, Text, View,Image, Linking } from "react-native";


const Header2 = () => {
  return (
      <View style={styles.headerStyle}>
        
       
        <Text style={styles.textStyle}>Rebirth</Text>
        <Image style={{height:30, width:30,marginBottom:20,marginRight:22}} source={require('../img/event_note-black-18dp.png')}/>
        
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    backgroundColor: "#F79341",
    alignItems:'flex-end',
    justifyContent:'space-between',
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.9,
    // Android Only
    elevation: 2
  
    
  },
  textStyle: {
    fontSize: 20,
    marginLeft:25,
    marginBottom:10,
    color:"#ffffff",
    fontFamily:"sans-serif-medium",
    marginBottom:20
    
  },
  Icon:{
    width:40,
    height:40
    
  }
});

export default Header2;
