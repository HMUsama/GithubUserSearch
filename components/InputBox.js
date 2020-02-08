import React, { Component } from 'react';
import { TextInput, View, Button, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Result from './Result';
import Spinner from './Spinner';
import { Icon } from "native-base";
import { fetchData } from '../src/store/actions/userAction'
import {connect} from 'react-redux'


const image = require('../img/logo2.png');
class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '', 
    };
  }

  fetchDatafunc = () => {
    const username = this.state.text;
    this.props.fetchData(username)
  }
  
  renderResult() {
    console.log("THIS IS PROPS ",this.props.user)
    console.log("THIS IS PROPS ",this.props.loading)

    if(this.props.loading !== false){
      return(<Spinner />)
    }
    if(this.props.user !== undefined){
      const {name,avatar_url,followers,following,login,message} = this.props.user.data;
      if (message) {
        return (
          this.props.loading ? <Spinner /> : 
          <Text style={styles.notFoundStyle}>User not found</Text>
        );
      }
      if(login){
        console.log("THIS IS PROPS ",this.props.loading)
        return (
          this.props.loading  ? 
          <Spinner /> 
          : 
          <Result 
            username={name}
            image={avatar_url}
            text={this.state.text}
            followers={followers}
            following={following}
          />
        );
      }
    }
  }

  render() {
    const { containerStyle, imageStyle, titleStyle } = styles;
    return (
      <ScrollView>
        <View style={{flexDirection:'row',marginTop:20,alignItems:'center',marginHorizontal:20}}>
        <Image 
        source={image}
        style={imageStyle}
      />
        <Text style={{paddingLeft:40}}>Github User Search</Text>
        </View>
        <View style={{ 
          flexDirection:'row',
          alignItems: 'center',
          alignContent:'center', 
          marginHorizontal: 20,
          marginTop:20,
          width:'90%',
          borderWidth:1,
          borderColor:'#1111',
          borderRadius:15,
          }}>
          <TextInput
            style={{width:'90%',paddingLeft:20}}
            placeholder="Enter Github username"
            autoCapitalize='none'
            autoCorrect={false}
            value={this.props.user}
            onChangeText={(text) => this.setState({ text })}
          />
          <TouchableOpacity  onPress={this.fetchDatafunc}   style={{ fontSize: 20,width:'10%',}}>
          <Icon
            type={"AntDesign"}
            name={'search1'}
          />
          </TouchableOpacity>
        </View>

        {this.renderResult()}

      </ScrollView>
    );
  }
}

const styles = {
  inputBoxStyle: {
    height: 40,
    marginTop: 20,
    borderWidth:1,
    borderColor:'#111',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '500'
  },
  imageStyle: { 
    height: 50, 
    width: 50
  },
  notFoundStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10
  }
};



const mapDispatchToProps=(dispatch)=>{
  // console.log("mapDispatchToProps",dispatch)
  return{
    fetchData: (data) =>dispatch(fetchData(data))
  }
}
const mapStateToProps = (state) => {
  console.log("mapStateToProps",state.fetchDataReduces.User)
  console.log("state.fetchDataReduces.loading",state.fetchDataReduces.loading)
  return{
    user:state.fetchDataReduces.User,
    loading:state.fetchDataReduces.loading
  }
}
// export default InputBox;
export default connect(mapStateToProps,mapDispatchToProps)(InputBox);
