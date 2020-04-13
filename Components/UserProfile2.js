/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, ScrollView, Text, View, Animated, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Rectangle from './Rectangle';

class UserProfile2 extends React.Component {

    constructor(props) {
        super(props);
        this.profilePicture = require('../Images/UserPicture_1.jpg');
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
        const titleHeight = 80;
        const scrollSpan = expandedHeaderHeight - collapsedHeaderHeight;

        return (
            <LinearGradient colors={['#fdfcfb', '#e2d1c3']} style={{ flex: 1 }} useAngle={true} angle={135} angleCenter={{ x: 0.5, y: 0.5 }}>
                <Animated.ScrollView style={styles.main_container} onScroll={scrollEvent} scrollEventThrottle={1}>
                    <Animated.View style={{ height: expandedHeaderHeight, overflow: 'hidden', zIndex: 100, transform: [{ translateY: Animated.subtract(scrollOffset, scrollOffset.interpolate({ inputRange: [0, scrollSpan], outputRange: [0, scrollSpan], extrapolate: 'clamp' })) }] }}>
                        <View style={styles.picture_container}>
                            <Animated.Image
                                style={styles.picture}
                                source={this.profilePicture}
                            />
                        </View>
                        <View style={styles.flag_container}>
                            <Image
                                style={styles.flag}
                                source={require('../Images/france2.png')}
                            />
                        </View>
                        <TouchableOpacity style={styles.edit_button}>
                            <Image
                                style={styles.edit_image}
                                source={require('../Images/edit.png')} />
                        </TouchableOpacity>
                        <Animated.View
                            style={[StyleSheet.absoluteFill, styles.header_container, { opacity: scrollOffset.interpolate({ inputRange: [scrollSpan / 1.3, scrollSpan], outputRange: [0, 0.98], extrapolate: 'clamp' }) }]} />
                        <Animated.Text
                            style={[styles.headerText_container, { transform: [{ translateY: scrollOffset.interpolate({ inputRange: [scrollSpan, scrollSpan + titleHeight], outputRange: [titleHeight, 0], extrapolate: 'clamp' }) }] }]}>
                            ALEXEB MOUSQUETAIRE
                        </Animated.Text>
                    </Animated.View>

                    <View style={styles.name_container}>
                        <Text style={styles.name}>ALEXEB</Text>
                        <Text style={styles.surname}>MOUSQUETAIRE</Text>
                    </View>

                    <View style={styles.ID_container}>
                        <View style={styles.infos_container}>
                            <Image
                                style={styles.info_image}
                                source={require('../Images/age_gender.png')}
                            />
                            <Text style={styles.info_text}>25, Male</Text>
                        </View>
                        <View style={styles.infos_container}>
                            <Image
                                style={styles.info_image}
                                source={require('../Images/country.png')}
                            />
                            <Text style={styles.info_text}>France</Text>
                        </View>
                        <View style={styles.infos_container}>
                            <Image
                                style={styles.info_image}
                                source={require('../Images/phone.png')}
                            />
                            <Text style={styles.info_text}>+33 123 456 798</Text>
                        </View>
                    </View>

                    <View style={styles.buttons_container}>
                        <TouchableOpacity style={styles.groupAct_button}>
                            <Text style={styles.title_button}>GROUPS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.groupAct_button, { backgroundColor: 'transparent', borderWidth: 3, borderColor: '#E3117A' }]}>
                            <Text style={[styles.title_button, { color: '#E3117A' }]}>ACTIVITIES</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category_container}>
                        <Text style={styles.category_title}>PERSONS IN CHARGE</Text>
                        <LinearGradient colors={['transparent', '#505050']} style={styles.line} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <View style={styles.line} />
                        </LinearGradient>
                        <Rectangle />
                        <Rectangle />
                        <Rectangle />
                        <Rectangle />
                    </View>
                    <View style={styles.category_container}>
                        <Text style={styles.category_title}>ACCOMMODATION</Text>
                        <LinearGradient colors={['transparent', '#505050']} style={styles.line} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <View style={styles.line} />
                        </LinearGradient>
                        <Text style={styles.category_content}>Homestay</Text>
                        <Text style={styles.category_content}>123, Huntington st., 9587452 Los Angeles</Text>
                        <Text style={styles.category_content}>Mrs.Davis</Text>
                        <Text style={styles.category_content}>Room n°2</Text>
                    </View>
                    <View style={styles.category_container}>
                        <Text style={styles.category_title}>MEDICAL</Text>
                        <LinearGradient colors={['transparent', '#505050']} style={styles.line} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <View style={styles.line} />
                        </LinearGradient>
                        <Text style={styles.category_content}>Needs to be careful with breathing the air, should walk on his hands, 3 of his legs has been removed for unknowed reasons</Text>
                    </View>
                    <View style={styles.category_container}>
                        <Text style={styles.category_title}>COMMENTS</Text>
                        <LinearGradient colors={['transparent', '#505050']} style={styles.line} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <View style={styles.line} />
                        </LinearGradient>
                        <Text style={styles.category_content}>Has been selected for the "casse-couilles" group, seems to be very close to his roomate Fabien GAY, is lovely with a flower in his hair. </Text>
                    </View>

                </Animated.ScrollView>
            </LinearGradient>
        );
    }
}

const screenWidth = Dimensions.get('screen').width;

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
        width: screenWidth,
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
    edit_button: {
        width: 50,
        height: 50,
        position: 'absolute',
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    edit_image: {
        width: 30,
        height: 30,
        tintColor: '#505050',
    },
    header_container: {
        backgroundColor: '#EF2B8D',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    headerText_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 7,
        fontSize: 17,
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'center',
        color: '#F4F4F4',
    },
    name_container: {
        flex: 1,
        marginTop: 10,
    },
    name: {
        alignSelf: 'center',
        marginBottom: 3,
        fontSize: 30,
        color: '#505050',
        fontFamily: 'Amiko-Bold',
        letterSpacing: 4,
    },
    surname: {
        alignSelf: 'center',
        fontSize: 24,
        color: '#505050',
        fontFamily: 'Amiko-Regular',
        letterSpacing: 3,
    },
    ID_container: {
        flex: 1,
        marginTop: 30,
        marginBottom: 20,
    },
    infos_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    info_text: {
        fontSize: 17,
        marginLeft: 14,
        color: '#505050',
        fontFamily: 'Amiko-Regular',
    },
    info_image: {
        width: 25,
        height: 25,
        marginLeft: 30,
        tintColor: '#505050',
    },
    category_container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    category_title: {
        fontSize: 17,
        marginBottom: 30,
        alignSelf: 'center',
        fontFamily: 'OpenSans-SemiBold',
        color: '#505050',
    },
    line: {
        position: 'absolute',
        top: 25,
        height: 2,
        width: Dimensions.get('screen').width,
    },
    category_content: {
        fontSize: 16,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 5,
        flexWrap: 'wrap',
        fontFamily: 'Amiko-Regular',
        color: '#505050',
    },
    buttons_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    groupAct_button: {
        width: 150,
        height: 45,
        borderRadius: 30,
        margin: 20,
        backgroundColor: '#E3117A', //'#EF2B8D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_button: {
        fontSize: 15,
        fontFamily: 'OpenSans-SemiBold',
        color: '#F4F4F4',
    },
});

export default UserProfile2;
