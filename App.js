/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet, 
  FlatList, 
  StatusBar,
} from 'react-native';

import PostsScreen from './src/posts/PostsScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePhotoUrls: [
      'https://pbs.twimg.com/profile_images/783300907039678465/VoIm-gRs_400x400.jpg',     
      'https://pbs.twimg.com/profile_images/461964160838803457/8z9FImcv_400x400.png',
      'https://pbs.twimg.com/profile_images/1242177116147462148/Yac97VhN_400x400.jpg',        
      'https://pbs.twimg.com/profile_images/926050400062631936/Rvynw19f_400x400.jpg',
      'https://pbs.twimg.com/profile_images/1004357936393719808/wGN4V9B1_400x400.jpg',
      'https://pbs.twimg.com/profile_images/1150717770478379008/8-XiwK-s_400x400.png',
      'https://pbs.twimg.com/profile_images/1082358814819536896/19QbYCgF_400x400.jpg',
       'https://pbs.twimg.com/profile_images/1061915596328263680/EcBjYl5z_400x400.jpg'
      ],
      usernames: [
        'umitunal1',
        'apnews',
        'adrianalima',              
        'cnn',
        'skynews',
        'bbcnews',
        'abcnews',
        'guardian'
      ],

      locations: [
        'Los Angeles, California',
        'Istanbul, Turkey',      
        'Istanbul, Turkey',
        'Istanbul, Turkey',
        'Istanbul, Turkey',
        'Istanbul, Turkey',
        'Istanbul, Turkey',
        'Istanbul, Turkey'
      ],

      postImages: [
        'https://images.unsplash.com/photo-1533244418366-8ce7b1c1a25f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',     
        'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',            
        'https://images.unsplash.com/photo-1565738156138-fb6feacc32f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1555426621-5d61f948ce78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1554041430-50938af8938d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1565036045177-025ab34fb5b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      ]
    };
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
          <FlatList
            data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }]}
            renderItem={({ item, index }) => (              
              <PostsScreen profilePhoto={this.state.profilePhotoUrls[index]} username={this.state.usernames[index]} location={this.state.locations[index]} postImage={this.state.postImages[index]}></PostsScreen>
            )}
          />
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
