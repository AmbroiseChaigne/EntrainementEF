/*eslint-disable prettier/prettier */
// Components/Test.js

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class ShadowTest extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <TouchableOpacity style={styles.action_button}>
                    <Image
                        style={styles.action_image}
                        source={require('../Images/plus_icon.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    contact_button: {
        width: 250,
        height: 50,
        borderRadius: 30,
        position: 'absolute',
        bottom: 300,//25,
        backgroundColor: 'white',//'#E3117A', //'#EF2B8D',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    title_button: {
        fontSize: 18,
        fontFamily: 'OpenSans-SemiBold',
        color: '#F4F4F4',
    },
    action_button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        right: 80,
        bottom: 80,
        backgroundColor: '#E3117A', //'#EF2B8D',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    action_image: {
        width: 25,
        height: 25,
    },
});

export default ShadowTest;
