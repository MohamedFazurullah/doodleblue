import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { Linking,StyleSheet,Modal, Alert,FlatList,Text, View,TouchableOpacity,ToastAndroid,PermissionsAndroid,AsyncStorage } from 'react-native';
import { Image, Icon,CheckBox } from 'react-native-elements';
import BillingPage from './billing';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import Contacts from 'react-native-contacts';
import { set } from 'react-native-reanimated';
//import CheckBox from '@react-native-community/checkbox';
import CallDetectorManager from 'react-native-call-detection';
import invokeApp from 'react-native-invoke-app';
//import Dialog, { DialogContent } from 'react-native-popup-dialog';
//import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import Dialog from "react-native-dialog";

export default function ContactPage({ navigation }){

    const [contact, setContact] = useState([]);
    const [text,setText] = useState("");
    const [isSelected, setSelection] = useState(false);
    let [callStates, setCallStates] = useState([]);
    let [flatListItems, setFlatListItems] = useState([]);
    const [isvisible,setvisible] = useState(true);
    const [nameArr, setNameArr] = useState(["", ""]);
    
    
    var arr = [];
    var phNum = null;

    function getdata(num,name){
        
        arr.push({
            "number": num,
            "name":name

          });
        //console.log("callStates:"+JSON.stringify(arr));

        
        
    }

    let callDetector = new CallDetectorManager(
        (event, number) => {
          console.log('event -> ', event + "-" +number);
          var updatedCallStates = callStates;
         
          updatedCallStates.push(number);
          //setFlatListItems(updatedCallStates);
          setCallStates(updatedCallStates);
          invokeApp();
          
          for(let i=0;i<arr.length;i++){
            
              if(arr[i].number == number){
                
                Alert.alert(  
                    event,  
                    "Name : "+arr[i].name+"\n"+"Number : "+number,  
                    [  

                        {text: 'OK', onPress: () => console.log('OK Pressed')},  
                    ]  
                );  
              //break;
              }
            
       }

          if (event === 'Disconnected') {
           
          } else if (event === 'Connected') {
            
          } else if (event === 'Incoming') {
           
          } else if (event === 'Dialing') {
           
          } else if (event === 'Offhook') {
            
          } else if (event === 'Missed') {
            
          }
        },
        true, 
        () => {
          
          console.log('Permission Denied by User');
        },
        {
          title: 'Phone State Permission',
          message:'This app needs access to your phone state',
        }
      );
    
    
    useEffect(() => {

        callDetector;
        
        
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            'title': 'Contacts',
            'message': 'This app would like to view your contacts.'
          }
        ).then(() => {
          Contacts.getAll()
          .then((contacts) => {
              setContact(contacts);
              //console.log("check:"+JSON.stringify(contact));
              
              

          })
        })
        .catch((err)=> {
            console.log(err);
        })
      }, []);

      
      
       
     
   function showToast(ph){
    Linking.openURL(`tel:${ph}`)
    //ToastAndroid.show(""+ph, ToastAndroid.SHORT);
  };
  function setcheckbox(id){
     if(id == true){
            setSelection(false);
    }else{
        setSelection(true);
    }
  }

  
  
 
  const renderItem = ({item,index}) => (

  
      
<TouchableOpacity onPress={() => console.log(item.displayName)}>


    



<View style = {{margin:10,padding:10,backgroundColor:"#DFD9DF",borderRadius:20}}>
<View style={{justifyContent:"flex-start",flexDirection:'row'}}>

<Text style= {{fontSize:20,fontWeight:'normal'}}>Name : </Text>
<Text style={{color:"#000000",fontSize:20,fontWeight:'bold'}}>
    {item.displayName}
</Text>

</View>
<View >
{
    

item.phoneNumbers.map(phone =>  (
    
  <TouchableOpacity onPress={()=>showToast(phone.number)}>
 
 <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:20,fontWeight:'normal'}}>{phone.label} : </Text>
    <Text style={{fontSize:20,fontWeight:'bold',color:'#C70039'}}>{phone.number}</Text>
</View>

  </TouchableOpacity>


        
))}

</View>

{/* <CheckBox
checked={isSelected}
onPress={() => setcheckbox(isSelected)}
/> */}

      </View>

      </TouchableOpacity>
      
           
    
)

 
  return (
      
<View style={{ flex: 1, width: "100%"}}>

<FlatList
                    data={contact}
                    renderItem={renderItem}
                    //Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => item.phoneNumbers.map(phone=>(
                        getdata(phone.number,item.displayName)
                    ))}
                />


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
