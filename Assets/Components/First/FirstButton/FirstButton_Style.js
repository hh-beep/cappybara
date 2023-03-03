import {  StyleSheet  } from 'react-native';


function FirstButton_Style() {
  return StyleSheet.create({
    Figure: {
      width: "80%",
      height: "15%",
    },
    FigureButton: {
      flex: 1,
      backgroundColor: "#E76567",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: 10
    },
    FigureButtonText: {
      fontFamily: "ArcaMajora3-Bold",
      color: "#F5FCEB",
      fontSize: 25,
    },
  }) 
}


export default FirstButton_Style;