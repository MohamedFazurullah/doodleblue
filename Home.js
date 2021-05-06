import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import BillingPage from './billing';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage({ navigation }){

 

  const showToast = () => {
    ToastAndroid.show("Explore Menu Clicked", ToastAndroid.SHORT);
  };

  return (
      
<View style={{ flex: 1, width: "100%", backgroundColor: "#000000" }}>

<View style={{ marginLeft: '5%', marginRight: "5%", flexDirection: 'column' }}>
  <Image
    source={{ uri: "asset:/pizza.jpg" }}
    style={{
      width: "100%", height: "55%",
      borderBottomRightRadius: 20, borderBottomLeftRadius: 20
    }}>

    <View style={{ marginLeft: "5%", marginTop: "5%" }}>
      <Text style={{ color: "#fff", fontStyle: 'italic' }}>Welcome to</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{
          color: "#fff", fontFamily: "Open Sans",
          fontSize: 20, fontWeight: 'bold',
        }}>LITTLE ITALY</Text>
      </View>

      <Text style={{ color: "#fff" }}>___________</Text>
      <Text style={{ color: "#fff", fontStyle: 'italic' }}>Anna Nagar</Text>
    </View>

    <View style={{ flexDirection: 'row', marginLeft: "10%" }}>
      <Icon name="star" size={15} color="#C6850C" ></Icon>
      <Icon name="star" size={15} color="#C6850C" ></Icon>
      <Icon name="star" size={15} color="#C6850C" ></Icon>
    </View>

    <View style={{ width: '100%', height:"60%",alignItems: 'center', marginTop: "125%" }}>

      <TouchableOpacity onPress={() => showToast()}
      style={{
        width: '75%', height: '8%',
        backgroundColor: '#ffffff', justifyContent: 'center', alignItems: "center",
        borderRadius: 20, borderColor: "#ff0000", borderWidth: 1, opacity: 0.7
      }}>
      <View >

        <Text style={{
          fontSize: 16, fontStyle: 'normal', fontWeight: 'bold',
          color: '#000'
        }}>Explore Menu</Text>

      </View>
      </TouchableOpacity>
      
    </View>

  </Image>

</View>

<TouchableOpacity onPress={() => navigation.navigate('Billing')}
style={{
  width: '90%', height: '10%', backgroundColor: '#fff', marginTop: "-92%",
  borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20,
  borderTopLeftRadius: 20, marginLeft: '5%', marginRight: "5%", justifyContent: "center",
  alignItems: "flex-start", paddingLeft: "5%"
}} >
  <View >
  
    <View style={{ flexDirection: "row" }}>
      <Icon name="list-circle-outline" size={50} type='ionicon'color="#0C27C6"></Icon>
      <View style={{ flexDirection: 'column', marginLeft: "5%" }}>
        <Text style={{ color: "#0C27C6", fontSize: 20 }}>Pay dining bills</Text>
        <Text style={{ color: "#000000", fontSize: 12 }}>Pay your dining bill digitally</Text>
      </View>
      <View style={{
        width: '25%', height: "100%",
        marginLeft: '10%', marginTop:"1%",borderTopRightRadius: 20, borderBottomRightRadius: 20
      }}>
        <Icon name="chevron-forward-outline" size={40} type='ionicon'color="#000"></Icon>

        
      </View>
    </View>
  </View>
</TouchableOpacity>

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
