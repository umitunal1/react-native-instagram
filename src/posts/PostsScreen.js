import React, { Component } from 'react';
import { View } from 'react-native'
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostLikes from './PostLikes';

class PostsScreen extends Component {
    render() {
        return (
            <View>
                <PostHeader />
                <PostImage />
                <PostActions />
                <PostLikes />
            </View>
        );
    }
};
export default PostsScreen;