import React from "react";
import { View, FlatList,StyleSheet,Text,Image } from "react-native";
import HomeDetail from "../src/components/HomeDetail";
import albumsData from "../json/albums.json";
import Header from "../src/components/Header"
const HomeScreen = ({navigation}) => {
  return (
    
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header/>
      <View style={styles.topContentStyle}>
        <Text style={styles.textstyle1}>4月25日</Text>
        <Text style={styles.textstyle1}>你已經堅持了20天</Text>
      </View>
      <View style={styles.midContentStyle}>
        <Text style={styles.textstyle2 }>每日營養攝取</Text>
      </View>
      <View style={styles.mainContent}>
      <FlatList
      data={albumsData.albumList}
      renderItem={({ item }) => 
      <HomeDetail 
      album={item} 
      navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
      <View>
      <Image style={styles.water} source={require('../src/img/water.png')}/>
      </View>
      </View>
      <View style={styles.midContentStyle}>
        <Text style={styles.textstyle2 }>今日熱量：0.0 kcal</Text>
      </View>


    </View>
  );
};

const styles=StyleSheet.create({
  
  topContentStyle:{
    height:180,
    width:420,
    backgroundColor:"#763BE54A",
    justifyContent:'center',
    alignItems:'center',
    
  },
  midContentStyle:{
    height:100,
    width:420,
    backgroundColor:"#fff",
    justifyContent:'center',
    alignItems:'center',
  },
  mainContent:{
    display:"flex",
    flexDirection:"row",
  },
  textstyle1:{
    fontSize:30,  
    color:"#fff",
    lineHeight:50,
  },
  textstyle2:{
    fontSize:20,
  },
  water:{
    height:150,
    width:150,
    marginTop:50,
    marginRight:20,
  },
  waterSection:{
    width:"40%",
   
  },
});

export default HomeScreen;