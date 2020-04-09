/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Animated } from 'react-native';


class ABUP_ExpandB extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bigSize: 2,
            nextSize: 2,
            animatedValue: new Animated.Value(1),
        };
        this.handlePress = this.handlePress.bind(this);
        //this.handlePressIn = this.handlePressIn.bind(this);
        //this.handlePressOut = this.handlePressOut.bind(this);
    }

    handlePress() {
        Animated.spring(this.state.animatedValue, {
            toValue: this.state.nextSize,
            useNativeDriver: true,
        }).start();
        if (this.state.nextSize === this.state.bigSize) {
            this.setState({ nextSize: 1 });
        }
        else {
            this.setState({ nextSize: this.state.bigSize });
        }
    }

    /*handlePressIn() {
        Animated.spring(this.state.animatedValue, {
            toValue: 2,
            useNativeDriver: true,
        }).start();
    }

    handlePressOut() {
        Animated.spring(this.state.animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    }*/


    render() {
        const animatedStyle = {
            transform: [{ scale: this.state.animatedValue}],
        };
        return (
            <TouchableWithoutFeedback
                onPress={this.handlePress}
                //onPressIn={this.handlePressIn}
                //onPressOut={this.handlePressOut}
                >
                <Animated.View
                    style={[styles.action_button, animatedStyle]}
                    //onPress={() => {}}
                    >
                    <Image
                        style={styles.action_image}
                        source={require('../Images/plus_icon.png')} />
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    action_button: {
        position: 'absolute',
        width: 60,
        height: 60,
        right: 30,
        bottom: 150, //30,
        borderRadius: 30,
        backgroundColor: '#EF2B8D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    action_image: {
        width: 30,
        height: 30,
      },
});

export default ABUP_ExpandB;
