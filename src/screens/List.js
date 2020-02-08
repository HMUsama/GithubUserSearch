import React, { Component } from 'react';
import {
    Image, 
    Text, 
    View,
    FlatList,
    TextInput, 
    StyleSheet,
    AsyncStorage, 
    TouchableOpacity, 
} from "react-native";
// import { Icon } from "native-base";


export default class ListScreen extends Component {
    constructor() {
        super()
        this.state = {
            data:[],
            text:"HMUsama"
        }
    }

    componentWillMount() {
        // const listUrl = `https://developer.github.com/v3/users/`;
        // const listUrl = `https://api.github.com/users`;
        // fetch(listUrl)
        fetch('https://api.github.com/users')
          .then((res)=>{
              console.log("componentWillMount",res)
              this.setState({
                  data:res
              })
          })
          .catch(error => {
            console.log(error);
          });
      }
    
    renderItem = (item) => {
        console.log("<<<<<<<<<<<<",item)
        // return (
        //     <View style={{ alignItems: "center" }}>
        //     {/* <Image
        //         source={theme.images.image}
        //         style={{ width: 50, height: 50 }}
        //     /> */}
        //     <Text style={{ fontSize: 25, fontWeight: '300', color: '#fff' }}>Sevyer</Text>
        // </View>
        // )
    }



    render() {
        console.log("------------", this.state.data)
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text>Product</Text>
                </View>
                <View style={{ alignItems: "center", width: 50, height: 50 }}>
                    <Image
                        source={this.state.data.url}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={{ fontSize: 25, fontWeight: '300', color: '#fff' }}>Sevyer</Text>
                </View>
                {/* <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                /> */}
            </View>
        )
    }
}