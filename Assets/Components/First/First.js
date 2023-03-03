import React from 'react';
import {  ImageBackground  } from 'react-native';

/*  Component  */
import FirstText from './FirstText/FirstText';
import FirstButton from './FirstButton/FirstButton';

/* Image */
const Image = require("../../Images/Places/first-background.jpg")

/*  Style */
import Firts_Style from './First_Style';





const style = Firts_Style();





const First = ({  navigation: {  navigate  }}) => {
  return (
    <ImageBackground
      source={  Image  }
      style={  style.Image  }
      blurRadius={  4  }
    >



      <FirstText />


      <FirstButton 
        navigate={  navigate  }
      />



    </ImageBackground>
  )
}

export default First;