import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { constants } from '../../utils/constants';

class PostHeader extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <View style={{ flexDirection: 'row', margin: constants.margin, marginBottom: constants.margin }}>
        <View>
          <Image style={{ width: 40, height: 40, flex: 1, borderRadius: 50 }}
            source={{ uri:this.props.profilePhoto}}></Image>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
          <View style={{ justifyContent: 'center', marginStart: 10 }}>
            <Text style={{ color: '#fff' }}>{this.props.username}</Text>
            <Text style={{ color: '#fff' }}>{this.props.location}</Text>
          </View>
          <View>
            <Image
              style={{ width: 20, height: 20, tintColor: '#fff' }}
              source={require('../../images/more2.png')}></Image>
          </View>
        </View>
      </View>
    );
  }
};
export default PostHeader;