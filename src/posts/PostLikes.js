import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import {constants} from '../../utils/constants';


const PostLikes = () => {
    return (
        <View style={{margin:constants.margin}}>
            <TouchableOpacity>
                <Text style={{color: constants.tintColor, fontWeight: 'bold'}}>193 likes</Text>
            </TouchableOpacity>
        </View>
    );
};
export default PostLikes;