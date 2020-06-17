import React, { Component } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { constants } from '../../utils/constants';

const win = Dimensions.get('window');

class PostImage extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: constants.margin }}>
                <Image
                    style={{ width: win.width, height: 300 }}
                    source={{ uri: this.props.postImage}}></Image>
            </View>
        );
    }
};
export default PostImage;