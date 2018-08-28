// import libraries for making component
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make a component
export default class Header extends Component{
   
    render() {
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
    );
       
    }
};
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 32,
        fontWeight: 'bold'
    }
});