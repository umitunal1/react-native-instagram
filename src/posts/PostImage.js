import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import {constants} from '../../utils/constants';

const win = Dimensions.get('window');
const PostImage = () => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: constants.margin }}>
            <Image
                style={{ width:win.width, height:300}}
                source={{ uri: 'https://images.unsplash.com/photo-1591791366546-09d56dee3840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }}></Image>
        </View>
    );
};
export default PostImage;