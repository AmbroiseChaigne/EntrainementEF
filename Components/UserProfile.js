/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import ABUP_ExpandB from './ABUP_ExpandB';
//import ABUP_allButtons from './ABUP_allButtons';
import ActionButtonUP from './ActionButtonUP';

class UserProfile extends React.Component {

    render() {
        return (
            <LinearGradient colors={['#fdfcfb', '#e2d1c3']} style={{ flex: 1 }} useAngle={true} angle={135} angleCenter={{x:0.5,y:0.5}}>
                <View style={styles.main_container}>
                    <View style={styles.pictureANDflag_container}>
                        <View style={styles.picture_container}>
                            <Image
                                style={styles.picture}
                                source={require('../Images/UserPicture_1.jpg')}
                            />
                        </View>
                        <View style={styles.flag_container}>
                            <Image
                                style={styles.flag}
                                source={require('../Images/france2.png')}
                            />
                        </View>
                    </View>
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
                        <ActionButtonUP />
                        <View style={styles.bottom_container}>
                            <TouchableOpacity style={styles.contact_button}>
                                <Text style={styles.title_button}>Contact</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        //backgroundColor: '#F4F4F4',
    },
    pictureANDflag_container: {
        flex: 1,
    },
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
        borderColor: '#fff',
        backgroundColor: '#fff',
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


export default UserProfile;



