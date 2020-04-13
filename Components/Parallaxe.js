/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, ScrollView, Text, View, Animated, Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Parallaxe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            scrollOffset: new Animated.Value(0),
        };
    }

    render() {
        const scrollEvent = Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollOffset } } }],
            { useNativeDriver: true }
        );
        const { scrollOffset } = this.state;
        const expandedHeaderHeight = 320;
        const collapsedHeaderHeight = 32;//64
        const titleHeight = 44;
        const scrollSpan = expandedHeaderHeight - collapsedHeaderHeight;

        return (
            <LinearGradient colors={['#fdfcfb', '#e2d1c3']} style={{ flex: 1 }} useAngle={true} angle={135} angleCenter={{ x: 0.5, y: 0.5 }}>
                <Animated.ScrollView style={styles.main_container} onScroll={scrollEvent} scrollEventThrottle={1}>
                    <Animated.View style={{ /*backgroundColor: 'red',*/ height: expandedHeaderHeight, overflow: 'hidden', zIndex: 100, transform: [{translateY: Animated.subtract(scrollOffset,scrollOffset.interpolate({inputRange: [0, scrollSpan], outputRange: [0, scrollSpan], extrapolate: 'clamp'}))}] }}>
                        <Animated.View style={[styles.picture_container, {transform: [{translateY: scrollOffset.interpolate({inputRange: [0, scrollSpan], outputRange: [0, scrollSpan / 2], extrapolate: 'clamp'})}] }] }>
                            <Image
                                style={styles.picture}
                                source={require('../Images/UserPicture_1.jpg')}
                            />
                        </Animated.View>
                        <Animated.View style={[styles.flag_container, {transform: [{translateY: scrollOffset.interpolate({inputRange: [0, scrollSpan], outputRange: [0, scrollSpan / 2], extrapolate: 'clamp'})}] }] }>
                            <Image
                                style={styles.flag}
                                source={require('../Images/france2.png')}
                            />
                        </Animated.View>
                    </Animated.View>







                    <View style={styles.ID_container}>
                        <Text style={styles.name}>ALEXEB</Text>
                        <Text style={styles.surname}>MOUSQUETAIRE</Text>
                        <View style={styles.infos_container}>
                            <Image
                                style={styles.info_image}
                                source={require('../Images/age_gender.png')}
                            />
                            <Text style={styles.info}>25, Male</Text>
                        </View>
                        <View style={styles.infos_container}>
                            <Image
                                style={styles.info_image}
                                source={require('../Images/country.png')}
                            />
                            <Text style={styles.info}>France</Text>
                        </View>
                        <View style={styles.infos_container}>
                            <Image
                                style={styles.info_image}
                                source={require('../Images/phone.png')}
                            />
                            <Text style={styles.info}>+33 123 456 798</Text>
                        </View>
                        <Text>{this.state.text}</Text>
                    </View>
                </Animated.ScrollView>
            </LinearGradient>
        );
    }

    async componentDidMount() {
        const res = await fetch('https://loripsum.net/api/plaintext');
        this.setState({ text: await res.text() });
    }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    /*pictureANDflag_container: {
        height: 320,
        transform: [{ translateY: this.state.scrollOffset }],
        zIndex: 100,
    },*/
    picture_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        //borderBottomLeftRadius: 20,
        //borderBottomRightRadius: 20,
    },
    picture: {
        resizeMode: 'cover',
        flex: 1,
        width: windowWidth,
        //borderBottomLeftRadius: 20,
        //borderBottomRightRadius: 20,
    },
    flag_container: {
        marginTop: -50,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#fdfcfb',
        backgroundColor: '#fdfcfb',
        borderWidth: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag: {
        resizeMode: 'cover',
        height: 90,
        width: 90,
    },
    ID_container: {
        flex: 1,
        marginTop: 10,
    },
    name: {
        alignSelf: 'center',
        marginBottom: 3,
        fontSize: 30,
        color: '#505050',
        fontFamily: 'Amiko-Bold',
        //fontFamily: 'SignikaNegative-SemiBold',
        //fontFamily: 'Gidole-Regular',
        letterSpacing: 4,
    },
    surname: {
        alignSelf: 'center',
        marginBottom: 30,
        fontSize: 24,
        color: '#505050',
        fontFamily: 'Amiko-Regular',
        //fontFamily: 'SignikaNegative-SemiBold',
        //fontFamily: 'Gidole-Regular',
        letterSpacing: 3,
    },
    infos_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        fontSize: 17,
        marginLeft: 14,
        color: '#505050',
        //fontFamily: 'SignikaNegative-Regular',
        //fontFamily: 'Gidole-Regular',
        fontFamily: 'Amiko-Regular',
    },
    info_image: {
        width: 25,
        height: 25,
        marginLeft: 30,
        tintColor: '#505050',
        //tintColor: '#E3117A',
    },
    bottom_container: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contact_button: {
        width: 250,
        height: 50,
        borderRadius: 30,
        position: 'absolute',
        bottom: 25,
        backgroundColor: '#E3117A', //'#EF2B8D',
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default Parallaxe;
