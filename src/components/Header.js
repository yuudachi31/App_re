import React from "react";
import { StyleSheet, Text, View,Image, Linking } from "react-native";


const Header = () => {
  return (
      <View style={styles.headerStyle}>
        
       
        <Text style={styles.textStyle}>Rebirth</Text>
        
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    backgroundColor: "#763BE54A",
    alignItems:'flex-end',
    height: 80,
    
  
    
  },
  textStyle: {
    fontSize: 20,
    marginLeft:25,
    marginBottom:10,
    color:"#ffffff",
    fontFamily:"sans-serif-medium"
    
  },
  Icon:{
    width:40,
    height:40
    
  }
});

export default Header;
