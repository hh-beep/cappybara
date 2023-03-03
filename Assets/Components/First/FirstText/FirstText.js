import React from 'react';
import {
  View,
  Text
} from 'react-native';

/*  Style  */
import FirstText_Style from './FirstText_Style';





const style = FirstText_Style();





const FirstText = () => {
  return (
    <View style={  style.Section  }>
      <Text style={  style.SectionText  }>Explore as maravilhas de Foz do Iguaçu</Text>
    </View>
  )
}

export default FirstText;