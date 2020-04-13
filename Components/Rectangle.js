/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


class Rectangle extends React.Component {

    render() {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text}>Item Person in charge</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: 300,
        height: 60,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: 18,
        fontFamily: 'OpenSans-SemiBold',
        color: '#fdfcfb',
    },
});

export default Rectangle;
