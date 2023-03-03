import React from 'react';
import {
  View, 
  Text,
  TouchableOpacity, 
} from 'react-native';

/*  Style  */
import HeaderDontHave_Style from './HeaderDontHave_Style';





const style = HeaderDontHave_Style();





const HeaderDontHave = ({  navigate  }) => {
  return (
    <View style={  style.container  }>
      <TouchableOpacity 
        style={  style.containerButton  }
        onPress={  () => {
          navigate("User")
        }}
      >



        <Text style={  style.containerButtonText  }>
          Olá usuário! Tudo Bem?
          <Text style={  style.containerButtonTextHighLight  }> Faça Login </Text> 
          para aproveitar mais o app &#59;&#41;
        </Text>



      </TouchableOpacity>
    </View>
  )
}

export default HeaderDontHave;