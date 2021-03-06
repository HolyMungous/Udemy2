// import a library to help create a component
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText='Albums'/>
        <AlbumList></AlbumList>
      </View> 
    );
  }
}



