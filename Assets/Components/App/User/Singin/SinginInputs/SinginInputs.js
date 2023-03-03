import React, { useState } from 'react';
import {
  View,
  TextInput
} from 'react-native';

/*  Style  */
import SinginInputs_Style from './SinginInputs_Style';





const style = SinginInputs_Style();





const SinginInputs = () => {


  const [passFocused, setPassFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);


  return (
    <View>
      <TextInput
        value={  email  }
        autoComplete='email'
        onChangeText={  setEmail  }
        placeholder='Digite seu email'
        onBlur={  () => {  setEmailFocused(false)  }}
        onFocus={  () => {  setEmailFocused(true)  }}
        placeholderTextColor={  emailFocused ? "#E76567" : "#072D16"  }
        style={  emailFocused ? style.containerInputFocused : style.containerInput  }
      />
      <TextInput 
        placeholder='Digite sua senha'
      />
    </View>
  )
}

export default SinginInputs;