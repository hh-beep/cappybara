import React from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';

/*  Style  */
import FirstButton_Style from './FirstButton_Style';





const style = FirstButton_Style();





const FirstButton = ({  navigate  }) => {
  return (
    <View style={  style.Figure  }>
      <TouchableOpacity
        style={  style.FigureButton  }
        activeOpacity={0.75}
        onPress={() => {
          navigate("AppRoutes")
        }}
      >


        <Text style={  style.FigureButtonText  }>Explorar</Text>


      </TouchableOpacity>
    </View>
  )
}

export default FirstButton;