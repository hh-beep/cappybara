import React, {
  useState, 
  useEffect
} from 'react';
import {
  View
} from 'react-native';

/*  Async Storage  */
import AsyncStorage from '@react-native-async-storage/async-storage';

/*  RN Navigation  */
import auth from '@react-native-firebase/auth';

/*  Progress Circle  */
import {  CircleSnail  } from 'react-native-progress';

/*  Style */
import Loading_Style from './Loading_Style';





const style = Loading_Style();





const Loading = ({  navigation: {  navigate  }}) => {

  useEffect(() => {
    async function loadInfos() {
      const asyncInfos = await AsyncStorage.getItem("haveLogin");
      const authUser = auth().currentUser;


      if (asyncInfos === null) {
        if (authUser !== null) {
          console.log("Auth tem e o Async nao")
          await AsyncStorage.setItem("haveLogin", JSON.stringify(true))
          navigate("Edit")
        }
        else {
          console.log("Os dois nao tem login")
          navigate("Singin")
        }
      }
      else {
        if (auth === null) {
          console.log("Auth nao tem e o Async nao")
          auth().signOut()
          navigate("Singin")
        }
        else {
          console.log("os 2 tem login")
          navigate("Edit")
        }
      }
    } 


    loadInfos()
  }, [])


  return (
    <View style={  style.container  }>
      <CircleSnail
        size={  50  }
        strokeCap="round"
        indeterminate={  true  }
        color="#072D16"
      />
    </View>
  )
} 

export default Loading;