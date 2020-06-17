import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { constants } from '../../utils/constants'

class PostActions extends Component {
    constructor(props) {
        super(props);
        this.state = { likedStatus: false };
    }

    handlePress = (msg) => {       
        this.setState({ likedStatus: !this.state.likedStatus });
        setTimeout(() => {
           this.state.likedStatus ? console.log("Liked!") : console.log("Like Undo!");
        }, 100);
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.handlePress()}>
                        <Image
                            style={this.state.likedStatus ? styles.likeButtonPressed : styles.likeButtonNotPressed}
                            source={this.state.likedStatus ? require('../../images/liked.png') : require('../../images/likeempty.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={{ width: 20, height: 20, margin: constants.margin + 5, tintColor: constants.tintColor }}
                            source={require('../../images/comment.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={{ width: 20, height: 20, margin: constants.margin + 5, tintColor: constants.tintColor }}
                            source={require('../../images/dm.png')}></Image>
                    </TouchableOpacity>


                </View>
                <View style={{ margin: constants.margin }}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 30, tintColor: '#fff' }}
                            source={require('../../images/save.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

};

const styles = StyleSheet.create({
    likeButtonNotPressed: {
        width: 30,
        height: 30,
        margin: constants.margin,
        tintColor: '#fff'
    },
    likeButtonPressed: {
        width: 30,
        height: 30,
        margin: constants.margin,
        tintColor: '#dd0000'
    }
});
export default PostActions;