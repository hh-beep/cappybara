import {  StyleSheet  } from 'react-native';


function HeaderDontHave_Style() {
  return StyleSheet.create({
    container: {
      height: 150,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    containerButton: {
      width: "85%"
    },
    containerButtonText: {
      fontSize: 15,
      fontFamily: "ArcaMajora3-Bold",
      color: "#072D16"
    },
    containerButtonTextHighLight: {  color: "#E76567"  }
  })
}


export default HeaderDontHave_Style;