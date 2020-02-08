import React, { Component } from 'react';
import {
    AsyncStorage, Image, StyleSheet,
    Text, TouchableOpacity, View,
    TextInput, FlatList
} from "react-native";
// import { Icon } from "native-base";


export default class ListtDetails extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems:'center'}}>
                <View style={{alignItems:'center',marginTop:20}}>
                    <Text>Product</Text>
                </View>
                <View style={{backgroundColor:'#999',width:'90%',height:100,alignItems:'center'}}>
                    <Text style={{fontSize:25}}>Details is </Text>
                </View>
            </View>
        )
    }
}