import React, { useState } from "react";
import { View, FlatList,StyleSheet,Text,Image,ScrollView,TouchableOpacity } from "react-native";
import HomeDetail from "../src/components/HomeDetail";
import albumsData from "../json/albums.json";
import Header from "../src/components/Header2"
const HomeScreen = ({navigation}) => {
  const [high, sethigh] = useState(0);
  const [num, setnum] = useState(0);
  return (
    
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header/>
      <ScrollView >
      <View style={styles.topContentStyle}>
        <Text style={styles.textstyle0}>4月25日</Text>
        <Text style={styles.textstyle0}>你已經堅持了20天</Text>
      </View>
      <View style={styles.sectionStyle}>
        <Text style={{fontSize:20,color:'#fff',marginLeft:28} }>每日營養攝取</Text>
      </View>
      <View style={styles.mainContent}>
      <View style={styles.cardContainerStyle}>
      <View>    
        <Text style={styles.textstyle1}>
                 碳水化合物
        </Text>
        <View style={{backgroundColor:'#F69342',height:12, marginLeft:20,width:60}}>
        <View style={styles.subbbb}>
        </View>
        </View>
        
      </View>
        
      
      <View>    
        <Text style={styles.textstyle1}>
                蛋白質
        </Text>
        <View style={{backgroundColor:'#F69342',height:12, marginLeft:20,width:80}}>
        <View style={styles.subbbb}>
        </View>
        </View>
        
      </View>
        
     
      <View >    
        <Text style={styles.textstyle1}>
                 脂質
        </Text>
        <View style={{backgroundColor:'#F69342',height:12, marginLeft:20,width:30}}>
        <View style={styles.subbbb}>
        </View>
        </View>
      </View>
        
      </View>  
      <View style={{height:200,flexDirection:'column-reverse',marginLeft:20,bottom:17,alignItems:'center'}}>
        <Text style={{marginBottom:-8,marginTop:3,color:'#eb8178'}}>{num}/2500</Text>
      <View style={{backgroundColor:'#9bd9e8',
    flexDirection:'column-reverse',
    height:high,
    width:77}}>
      <Image style={styles.bottle} source={require('../src/img/bottle.png')}/>
      </View>
      <View></View>
      </View>
      <View style={{height:180,width:40,top:35,justifyContent:'space-between',alignItems:'flex-end',bottom:20}}>
      <TouchableOpacity
       onPress={() =>{sethigh(high+6);setnum(num+100)}}
      >
<Image style={styles.pdbutton} source={require('../src/icon/plus.png')}/>
</TouchableOpacity>
<TouchableOpacity
       onPress={() =>{sethigh(high-6);setnum(num-100)}}
      >
<Image style={styles.pdbutton} source={require('../src/icon/decrease.png')}/>
</TouchableOpacity>


      </View>
      </View>
      <View style={styles.midContentStyle}>
        <Text style={styles.textstyle2 }>今日熱量：0.0 kcal</Text>
      </View>
      <View style={styles.sectionStyle}>
        <Text style={{fontSize:20,color:'#fff',marginLeft:28} }>每日任務</Text>
      </View>
      <View style={{marginTop:30}}>
<View style={styles.missoncard}>
  <View style={{width:150}}>
  <Text style={styles.missonText}>連續運動30分鐘</Text>
  </View>
  <View style={{marginLeft:30,flexDirection:'row',justifyContent:'center'}}>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  
  </View>
  <View style={{flex:1}}>
  <Image style={styles.missonComplete} source={require('../src/img/check_circle_outline-black-18dp.png')}/>
  </View>
</View>
<View style={styles.missoncard}>
<View style={{width:150}}>
  <Text style={styles.missonText}>睡滿8小時</Text>
  </View>
  <View style={{marginLeft:30,flexDirection:'row',justifyContent:'center'}}>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  </View>
  <View style={{flex:1}}>
  <Image style={styles.missonComplete} source={require('../src/img/check_circle_outline-black-18dp.png')}/>
  </View>
</View>
<View style={styles.missoncard}>
  <View style={{width:150}}>
  <Text style={styles.missonText}>不喝含糖飲料</Text>
  </View>
  <View style={{marginLeft:30,flexDirection:'row',justifyContent:'center'}}>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
 
  
  </View>
  <View style={{flex:1}}>
  <Image style={styles.missonComplete} source={require('../src/img/check_circle_outline-black-18dp.png')}/>
  </View>
</View>
<View style={styles.missoncard}>
  <View style={{width:150}}>
  <Text style={styles.missonText}>不吃垃圾食物</Text>
  </View>
  <View style={{marginLeft:30,flexDirection:'row',justifyContent:'center'}}>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
  <Image style={styles.star} source={require('../src/img/star-black-18dp.png')}/>
 
  
  </View>
  <View style={{flex:1}}>
  <Image style={styles.missonComplete} source={require('../src/img/check_circle_outline-black-18dp.png')}/>
  </View>
</View>
<View style={{height:100}}></View>
      </View>
</ScrollView>
    </View>
    
  );
};

const styles=StyleSheet.create({
  cardContainerStyle: {
    width:"60%",
    marginTop:-5,
    backgroundColor:"#fff"
  },
 
  textstyle0:{
    fontSize:30,  
    color:"#fff",
    lineHeight:50,
  },
  subbbb:{
    height:12,
    width:160,
   
    borderColor: '#707070',
    borderWidth: 2,
    
  },
  topContentStyle:{
    height:180,
    width:420,
    backgroundColor:"#F69342",
    justifyContent:'center',
    alignItems:'center',
  },
  pdbutton:{
    height:25,
    width:25,
    
  },
  midContentStyle:{
    height:80,
    width:420,
    backgroundColor:"#fff",
    justifyContent:'center',
    alignItems:'center',
  },
  sectionStyle:{
marginTop:20,
    height:50,
    width:200,
    backgroundColor:"#1f80e0",
    justifyContent:'center',
    
    borderBottomRightRadius:35
  },
  mainContent:{
    marginTop:30,
    display:"flex",
    flexDirection:"row",
    height:250
  },
  textstyle1:{
    fontSize:20,  
    color:"#2e2e2e",
    lineHeight:50,
    marginLeft:20,
  },
  
  textstyle2:{
    fontSize:20,
  },
  water:{
    backgroundColor:'#9bd9e8',
    flexDirection:'column-reverse',
    height:10,
    width:77
    
  },
  bottle:{
    height:190,
    width:77,
    marginTop:50,
    marginRight:20,
  },
  waterSection:{
    width:"40%",
   
  },
  missoncard:{
flexDirection:'row',
height:70,
marginLeft:21,
width:'100%',
alignItems:'center'

  },
  missonText:{
    color:'#2082E0',
    fontSize:18
  },
  star:{
    height:26,
    width:26
  },
  missonComplete:{
    height:35,
    width:35,
    alignSelf:'flex-end',
    marginRight:45}
});

export default HomeScreen;