import React from 'react';
import {View, Image, Text} from 'react-native';
import {constants} from '../../utils/constants';
const PostHeader = () => {
  return (
    <View style={{ flexDirection: 'row',margin: constants.margin, marginBottom: constants.margin }}>
      <View>
        <Image style={{ width: 40, height: 40, flex: 1, borderRadius: 50 }}
          source={{ uri: 'https://pbs.twimg.com/profile_images/783300907039678465/VoIm-gRs_400x400.jpg' }}></Image>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
        <View style={{ justifyContent: 'center',  marginStart: 10 }}>
          <Text style={{ color: '#fff' }}>umitunal1</Text>
          <Text style={{ color: '#fff' }}>Bodrum-Yalikavak</Text>
        </View>
        <View>
          <Image
            style={{ width: 20, height: 20, tintColor: '#fff' }}
            source={require('../../images/more2.png')}></Image>
        </View>
      </View>
    </View>
  );
};
export default PostHeader;