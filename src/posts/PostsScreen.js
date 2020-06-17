import React, { Component } from 'react';
import { View } from 'react-native'
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostLikes from './PostLikes';

class PostsScreen extends Component {
    constructor(props){
        super(props);        
    }

    render() {
        return (
            <View>
                <PostHeader profilePhoto ={this.props.profilePhoto} username={this.props.username} location={this.props.location}/>
                <PostImage postImage={this.props.postImage} />
                <PostActions />
                <PostLikes />
            </View>
        );
    }
};
export default PostsScreen;