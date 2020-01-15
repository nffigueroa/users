import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { getRandomUser } from '../services/user';
import { bindActionCreators } from 'redux';
import { AddProfile, ChangePhoto } from '../store/reducer/profile';
import { connect } from 'react-redux';
import Item from './item';



function ListComponent(props) {
    useEffect(() => {
        getRandomUser()
        .then((response) => {
          props.AddProfile(response.results);
        });
    }, []);
   
  return (
    <View style={styles.container}>
      {props.profile ? 
        <FlatList style={styles.flat}
        data={props.profile.profile} 
        renderItem={(param) => { return (<Item {...props} {...param} />) }} 
        keyExtractor={(item) => item.id}
        />:
        'Loading...'
      }
      
    </View>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
