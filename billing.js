import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid } from 'react-native';
import {  Image,Icon,Input  } from 'react-native-elements';
import HomePage from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

    
    

export default function BillingPage({ navigation }) {

    const [txtt, setText] = useState("");
    const showToast = () => {
        ToastAndroid.show("Proceed to payment", ToastAndroid.SHORT);
      };

  return (
      
        <View  style={{ flex: 1, width: "100%", backgroundColor: "#ffffff" }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}
        style = {{width:"20%",height:"10%",padding: 10,justifyContent:"flex-start",alignItems: "flex-start"}}>
        <View >
            <Icon name="chevron-back-outline" size={35} type='ionicon'color="#000"></Icon>
            </View>
        </TouchableOpacity>


        
        <View style = {{width: "100%",height:"35%",backgroundColor:"#EFF0EC",flexDirection:'row',justifyContent:"center",alignItems:"center"}}>
                <View style= {{width:"50%",flexDirection:"column"}}>
                    <View style = {{padding:10,flexDirection:"row",justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name="reorder-four-sharp" size={25} type='ionicon'color="#000"></Icon>
                    <Text style= {{padding:10,fontWeight:"bold",fontSize:15,color: "#000"}}>Bill amount</Text>
                    </View>
                
                <Input
                        showSoftInputOnFocus={false}
                        placeholder='Amount'
                        leftIcon={{ type: 'ionicon', name: 'logo-usd' }}
                        inputStyle={{fontWeight:'bold',fontSize:20}}
                        containerStyle={{width:"100%"}}
                        >{txtt}</Input>
                        <Text style= {{paddingLeft : 10,color:"#000"}}>Enter amount on your bill</Text>
                </View>
        
                <View style={{width: "40%",height:"40%",borderRadius:20,}}>
                <Image
                                source={{ uri: "asset:/chef.png" }}
                                style={{
                                width: "100%", height: "100%",resizeMode:"contain",
                                
                            }}/>
                </View>
           
                
        </View>
        <View>
            <View style={{flexDirection:'row',paddingLeft:"8%",paddingTop:"4%"}}>
                <TouchableOpacity onPress={() => setText(txtt+"1")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "1%",borderRadius:20,backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>1</Text>
                </View >
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(txtt+"2")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "10%",borderRadius:20,borderColor:"#F5F6F1",backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>2</Text>
                </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => setText(txtt+"3")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "10%",borderRadius:20,borderColor:"#F5F6F1",backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>3</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection:'row',paddingLeft:"8%",paddingTop:"4%"}}>
                <TouchableOpacity onPress={() => setText(txtt+"4")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "1%",borderRadius:20,backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>4</Text>
                </View >
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(txtt+"5")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "10%",borderRadius:20,borderColor:"#F5F6F1",backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>5</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(txtt+"6")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "10%",borderRadius:20,borderColor:"#F5F6F1",backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>6</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection:'row',paddingLeft:"8%",paddingTop:"4%"}}>
                <TouchableOpacity onPress={() => setText(txtt+"7")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "1%",borderRadius:20,backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>7</Text>
                </View >
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(txtt+"8")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "10%",borderRadius:20,borderColor:"#F5F6F1",backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>8</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(txtt+"9")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "10%",borderRadius:20,borderColor:"#F5F6F1",backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>9</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection:'row',paddingLeft:"8%",paddingTop:"4%"}}>
                <TouchableOpacity onPress={() => setText(txtt+"0")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "1%",borderRadius:20,backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>0</Text>
                </View >
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(txtt+".")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "10%",borderRadius:20,borderColor:"#F5F6F1",backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>.</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText("")}
                style ={{justifyContent:'center',alignItems:'center',width:"22%",marginLeft: "10%",borderRadius:20,borderColor:"#F5F6F1",backgroundColor:"#F0F1EC"}}>
                <View >
                <Text style={{fontSize:40,fontWeight:'bold',color:'#000'}}>C</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            
        </View>


<View style= {{margin:'5%'}}>
<TouchableOpacity onPress={() => navigation.navigate('Payment')}
style = {{height: '28%',justifyContent:'center',alignItems:'center',borderRadius: 20,backgroundColor:"#8B8383"}}>
<View >
                <Text style= {{color:"#fff",fontWeight:"bold",fontSize:18}}>Proceed to pay</Text>
            </View>
</TouchableOpacity>

    </View>    

    
            
        
        
      </View>

    
     
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
