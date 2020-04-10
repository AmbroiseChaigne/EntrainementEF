/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native';


class ActionButtonUP extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            spinAnim: new Animated.Value(0),
            spinABAnim: new Animated.Value(0),
            sizeAnim: new Animated.Value(0),
            visible: 'false',
        };
        this.appearing = this.appearing.bind(this);
        this.disappearing = this.disappearing.bind(this);
        this.menuAnimation = this.menuAnimation.bind(this);
    }

    menuAnimation() {
        if (this.state.visible === 'false') {
            this.appearing();
            this.setState({ visible: 'true' });
        }
        else {
            this.disappearing();
            this.setState({ visible: 'false' });
        }
    }

    appearing() {
        Animated.parallel([
            Animated.timing(this.state.spinABAnim, {
                toValue: 1,
                duration: 150,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.spinAnim, {
                toValue: 1,
                duration: 150,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.spring(this.state.sizeAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.fadeAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }),
        ]).start();
    }

    disappearing() {
        Animated.parallel([
            Animated.timing(this.state.spinABAnim, {
                toValue: 0,
                duration: 150,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.spinAnim, {
                toValue: 0,
                duration: 150,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.spring(this.state.sizeAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }),
        ]).start();
    }

    render() {
        const spin = this.state.spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['270deg', '0deg']
        });
        const spinAB = this.state.spinABAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        });
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.buttons_container, { opacity: this.state.fadeAnim }, {transform: [{rotate: spin}] }, {transform: [{scale: this.state.sizeAnim}] } ]}>
                    <Animated.View style={[styles.info_button, { bottom: 165, right: 75 }]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/persons_in_charge.png')} />
                    </Animated.View>
                    <View style={[styles.info_button, { bottom: 160, right: 130 }]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/groups.png')} />
                    </View>
                    <View style={[styles.info_button, { bottom: 120, right: 165 }]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/activities.png')} />
                    </View>
                    <View style={[styles.info_button, { bottom: 70, right: 165 }]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/accommodation.png')} />
                    </View>
                    <View style={[styles.info_button, { bottom: 30, right: 130 }]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/medical.png')} />
                    </View>

                    <View style={[styles.info_button, { bottom: 25, right: 70 }]}>
                        <Image
                            style={styles.info_image}
                            source={require('../Images/comments.png')} />
                    </View>
                </Animated.View>
                <TouchableOpacity style={[styles.action_button, {transform: [{rotate: spinAB}] }]} onPress={this.menuAnimation}>
                    <Image
                        style={styles.action_image}
                        source={require('../Images/plus_icon.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 220,
        height: 220,
        borderRadius: 110,
        position: 'absolute',
        right: -60,
        bottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons_container: {
        width: 220,
        height: 220,
        borderRadius: 110,
        position: 'absolute',
        backgroundColor: '#F04098',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 20,
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
        elevation: 20,
    },
    action_image: {
        width: 25,
        height: 25,
    },
    info_button: {
        width: 30,
        height: 30,
        borderRadius: 15,
        position: 'absolute',
        //right: 95,
        //bottom: 95,
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

export default ActionButtonUP;
