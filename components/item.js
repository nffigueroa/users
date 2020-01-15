import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { AddProfile, ChangePhoto } from '../store/reducer/profile';
import { connect } from 'react-redux';

function Item(props) {
    return (
        <View  style={styles.containerItem} key={props.item.email}>
            <TouchableOpacity onPress={()=> props.navigation.navigate('Detail', { itemSelected: props.item })}>
              <View style={styles.containerImage}>
            {props.photo ? <Image  style={styles.image} source={{uri: props.item.picture.medium}} />
            : 'loading...'
            }
              
              </View>
            <View style={styles.containerInfo}>
              <Text>{props.item.name.first}</Text>
              <Text>{props.item.dob.age} Years old</Text>
              <Text>From {props.item.location.city}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerItem: {
    backgroundColor: '#FCCABF',
    margin: 10,
    padding: 10,
    fontSize: 14,
    borderRadius: 10,
  },
  containerImage: {
      margin: 'auto',
      width: '100%',
      borderRadius: 50,
      marginBottom: 10,
      alignItems: 'center'
  },
  flat: {
      width: 350
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  containerInfo: {
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => ({
  profile: state.profile,
  photo: state.photoUri
})
const mapDispatchToProps = (dispatch) => bindActionCreators({AddProfile, ChangePhoto}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Item);
