/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
//import ABUP_ExpandB from './ABUP_ExpandB';
import ABUP_allButtons from './ABUP_allButtons';

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
                    <Text style={styles.name}>Alexeb Mousquetaire</Text>
                    <Text style={styles.info}>25, Male</Text>
                    <Text style={styles.info}>France</Text>
                    <Text style={styles.info}>+33 123 456 798</Text>
                    <ABUP_allButtons/>
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
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey',
    },
    info: {
        fontSize: 17,
        fontWeight: '300',
        marginLeft: 30,
        color: 'grey',
    },
});


export default UserProfile;
