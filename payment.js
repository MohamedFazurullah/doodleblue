import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid } from 'react-native';
import { Image, Icon ,Input,CheckBox } from 'react-native-elements';
import BillingPage from './billing';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';


const showToast = text => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  };

export default function PaymentPage({ navigation }){
    
    const [isLoading, setIsLoading] = useState(false)

  

  return (

    
      
<View style={{ flex:1,width: "100%",position:"relative" }}>

<View style={{width:"100%",height:"70%",backgroundColor:"#ffffff",
borderTopRightRadius: 50,borderTopLeftRadius: 50,marginTop:"70%",opacity: 30,justifyContent:'flex-start',alignItems:"center"}}>

    <Text style= {{color:"#000",fontSize:15,fontWeight:"bold",
marginTop:5}}>Log in To Continue</Text>

<View style={{flexDirection:"row",justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:16,color:"#000",fontWeight:"bold",marginTop:-15}}>+91 -</Text>
<Input
                        keyboardType="phone-pad"
                        placeholder='Enter Mobile Number'
                        inputStyle={{fontWeight:'bold',fontSize:16,marginTop:15}}
                        containerStyle={{width:"70%"}}
                        ></Input>
</View>


<View style= {{flexDirection:"row",marginTop:-15}}>
    
<CheckBox
  containerStyle={{backgroundColor:"#00000000"}}
  title='SMS OTP'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={isLoading}
  onPress={() => setIsLoading(true)}
/>
<CheckBox
containerStyle={{backgroundColor:"#00000000"}}  
  center
  title='WHATSAPP'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={!isLoading}
  onPress={() => setIsLoading(false)}
/>
</View>

<View style={{marginTop:5}}>
    <Text style={{color:"#000",fontWeight:'normal',
}}>Select Order Type</Text>
</View>

<View style={{flexDirection:'row',height:"20%",marginTop:5}}>
<TouchableOpacity  onPress = {() => showToast("Dine in")}
style={{width:"20%",height:"100%",backgroundColor:"#DFD9DF",
justifyContent:'center',alignItems:"center",marginRight:50,borderRadius:15}}> 
<View >
<Icon name="fast-food-outline" size={65} type='ionicon'color="#000"></Icon>
<Text style= {{color:"#000",fontSize:16}}>Dine in</Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress = {() => showToast("Take Away")}
style={{backgroundColor:"#DFD9DF",justifyContent:'center',alignItems:"center",
marginLeft:20,borderRadius:15}}>
<View >
<Icon name="newspaper-outline" size={65} type='ionicon'color="#000"></Icon>
<Text style= {{color:"#000",fontSize:16}}>Take Away</Text>
</View>
</TouchableOpacity>



</View>

<View style ={{marginTop:2}}>
    <View style= {{justifyContent:'center',alignItems:"center"}}>
    <Text style= {{color:"#000"}}>Enter OTP</Text>
    </View>
    
    <View style={{flexDirection:"row",justifyContent:'center'}}>
    <Input
                        keyboardType="phone-pad"
                        placeholder=''
                        inputStyle={{fontWeight:'normal',fontSize:16}}
                        containerStyle={{width:"20%"}}
                        ></Input>

<Input
                        keyboardType="phone-pad"
                        placeholder=''
                        inputStyle={{fontWeight:'normal',fontSize:16}}
                        containerStyle={{width:"20%"}}
                        ></Input>

<Input
                        keyboardType="phone-pad"
                        placeholder=''
                        inputStyle={{fontWeight:'normal',fontSize:16}}
                        containerStyle={{width:"20%"}}
                        ></Input>

<Input
                        keyboardType="phone-pad"
                        placeholder=''
                        inputStyle={{fontWeight:'normal',fontSize:16}}
                        containerStyle={{width:"20%"}}
                        ></Input>
                        
    </View>
    

</View>

<TouchableOpacity onPress = {() => showToast("Continue")}
style= {{backgroundColor:"#DED9D9",width:"80%",height:"10%",justifyContent:"center",
alignItems:"center",borderRadius:20}}>
<View >
        <Text style={{color:"#000",fontSize:20,fontWeight:'bold'}}>Continue</Text>
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
