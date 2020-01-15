
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import CameraComponent from './camera';


export default function DetailsComponent(props) {
    const userProfile = props.navigation.getParam('itemSelected');
    const [uriAvatar, seturiAvatar] = useState(userProfile.picture.large);
    const [useCamera, setuseCamera] = useState(false);
  return (
  <View style={styles.container}>
      {useCamera 
        ? <CameraComponent changeImgPath={(uriNew) => { seturiAvatar(uriNew); setuseCamera(false) }} /> 
        : 
        <View>
            <View style={userProfile.gender === 'female' ? styles.borderImageFemale : styles.borderImageMale}>
                <Image style={styles.avatar} source={{uri: uriAvatar}}/>
            </View>
            <View style={styles.containerSpeech}>
<Text style={styles.greeting}>HelloDa! I'm {userProfile.name.title} {userProfile.name.fisrt} {userProfile.name.last}</Text>
                <Text><Text style={styles.labelSpeech}>Contact:</Text> {userProfile.phone} Or {userProfile.cell}</Text>
                <Text><Text style={styles.labelSpeech}>Email:</Text> {userProfile.email}</Text>
                <Text><Text style={styles.labelSpeech}>Years as a User:</Text> {userProfile.dob.age - userProfile.registered.age}</Text>
            </View>
            <Button style={styles.button} title="Change the photo!" onPress={() => setuseCamera(true)}></Button>
        </View>
        }
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#EEEEEE',
        margin: 'auto',
        marginTop: 20,
        flex: 1
    },
    borderImageMale: {
        width: '100%',
        alignItems: 'center',
        height: 210,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 50,
        backgroundColor: 'black',
        opacity: 0.8
    },
    borderImageFemale: {
        alignItems: 'center',
        width: '100%',
        height: 210,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 50,
        backgroundColor: 'pink',
        opacity: 0.8
    },
    greeting: {
        color: '#ABABAB',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 50,
        justifyContent: 'center'
    },
    containerSpeech: {
        backgroundColor: 'white',
        shadowOffset: { width: 7, height: 10},
        shadowRadius: 103,
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.68,
        borderRadius: 20,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    titleSpeech: {
        borderRadius: 20,
        fontSize: 18
    },
    labelSpeech: {
        fontWeight: '700'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 10
    }
})
//box-shadow: 7px 10px 103px 0px rgba(0,0,0,0.68);

