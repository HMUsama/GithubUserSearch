import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, Linking, View, TouchableHighlight } from 'react-native';
// import { fetchData } from '../src/store/actions/userAction'
// import {connect} from 'react-redux'

class Result extends Component {
  openLink = () => {
    const username = this.props.text;
    username ? Linking.openURL(`https://github.com/${username}`) : <View>Usama</View>;
  }

  render() {
   
    const { containerStyle, textStyle, imageStyle } = styles;
    const { image, username, following, followers} = this.props;
    return (
      <View style={containerStyle} >
        <Text style={textStyle}>{username}</Text>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
        <View style={{
          flexDirection:'row',
          width:'80%',height:50,alignItems:'center',
          justifyContent:'space-around'
        }}>
          <TouchableOpacity><Text style={{borderWidth:1,borderColor:'#333',padding:10}}>Followers:{followers}</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{borderWidth:1,borderColor:'#333',padding:10}}>Following:{following}</Text></TouchableOpacity>
        </View>

          <TouchableOpacity
            onPress={this.openLink}
            style={{
              width: '70%',
              borderWidth: 1,
              borderColor: '#111',
              borderRadius: 10,
              height:30,
              alignSelf:'center',
              alignContent:'center',
              alignItems: 'center',
            }}>
            <Text style={{alignItems:'center'}}>GO To Profile </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
  

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e2e2e2',
    // borderTopWidth: 1
  },
  textStyle: {
    fontSize: 27,
    fontWeight: '500',
    alignItems:'center',
    marginBottom: 10
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor:'#111'
  }
};


// const mapStateToProps = (state) => {
//   console.log("mapStateToProps",state)
//   return{
//     user:state
//   }
// }
export default Result;
// export default connect(mapStateToProps,null)(Result);
