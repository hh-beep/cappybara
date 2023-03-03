import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

/*  RN Navigation  */
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';





const Edit = () => {

  const user = auth().currentUser;

  return (
    <View>
      <Text>{  user.displayName  }</Text>
      {
      //<Image 
      //  source={  user.photoURL  }
      //>
      }
    </View>
  )
}

export default Edit;