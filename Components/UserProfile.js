/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
//import ABUP_ExpandB from './ABUP_ExpandB';
//import ABUP_allButtons from './ABUP_allButtons';
import ActionButtonUP from './ActionButtonUP';

class UserProfile extends React.Component {

    render() {
        return (
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
                    <Text style={styles.name}>ALEXEB MOUSQUETAIRE</Text>
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
                    <View style={styles.bottom_container}>
                        <Text style={[styles.info, {color: 'white'} ]}>ON VERRA APRES</Text>
                    </View>
                    <ActionButtonUP />
                </View>
            </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#fff',
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
        marginBottom: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey',
_
    },
    infos_container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 2,
        alignItems:'center',
    },
    info: {
        fontSize: 18,
        fontWeight: '300',
        marginLeft: 10,
        color: 'grey',
        fontFamily: 'monospace',
    },
    info_image: {
        width: 25,
        height: 25,
        marginLeft: 30,
        tintColor: 'grey',
        //tintColor: '#E3117A',
    },
    bottom_container: {
        flex: 4,
        //backgroundColor: 'blue',
    },
});


export default UserProfile;



