import {  StyleSheet  } from 'react-native';


function HeaderHave_Style() {
  return StyleSheet.create({
    container: {
      height: 150,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: "row"
    },


    
    containerArea: {  width: 200  },
    containerAreaButton: {  width: "auto"  },
    containerAreaButtonText: {
      fontSize: 15,
      fontFamily: "ArcaMajora3-Bold",
      color: "#072D16"
    },
    containerAreaButtonTextHighLight: {  color: "#E76567"  },


    containerFigure: {
      height: 60,
      width: 60 ,
    },
    containerFigureImage: {
      width: "100%",
      height: "100%",
      borderRadius: 100
    },
  })
}


export default HeaderHave_Style;