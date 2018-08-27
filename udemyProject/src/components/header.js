// import libraries for making component
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make a component
export default class Header extends Component{
    
    render() {
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Albums!!</Text>
            </View>
    );
       
    }
};
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 36,
        fontWeight: 'bold'
    }
});