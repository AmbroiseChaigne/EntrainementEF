/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Animated } from 'react-native';


class ABUP_allButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    /*componentDidMount() {
        const fadeAnim = new Animated.Value(0);

        const fadeIn = () => {
          // Will change fadeAnim value to 1 in 5 seconds
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
          }).start();
        };

        const fadeOut = () => {
          // Will change fadeAnim value to 0 in 5 seconds
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
          }).start();
        };
    }*/


    render() {
        return (
            <View style={styles.buttons_container}>
                <View style={styles.action_button}>
                    <Image
                        style={styles.action_image}
                        source={require('../Images/plus_icon.png')} />
                </View>
                <View style={[styles.info_button, {bottom:165, right:75}]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/persons_in_charge.png')} />
                </View>
                <View style={[styles.info_button, {bottom:160, right:130}]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/groups.png')} />
                </View>
                <View style={[styles.info_button, {bottom:120, right:165}]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/activities.png')} />
                </View>
                <View style={[styles.info_button, {bottom:70, right:165}]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/accommodation.png')} />
                </View>
                <View style={[styles.info_button, {bottom:30, right:130}]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/medical.png')} />
                </View>

                <View style={[styles.info_button, {bottom:25, right:70}]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/comments.png')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons_container: {
        width: 220,
        height: 220,
        borderRadius: 110,
        position: 'absolute',
        right: -60,
        bottom: 50,
        backgroundColor: '#F04098',
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
    },
    action_image: {
        width: 30,
        height: 30,
      },
    info_button: {
        width: 30,
        height: 30,
        borderRadius: 15,
        position: 'absolute',
        //right: 95,
        //bottom: 95,
        //backgroundColor: 'green',
        borderColor: '#fff',
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info_image: {
        width: 15,
        height: 15,
    },
});

export default ABUP_allButtons;
