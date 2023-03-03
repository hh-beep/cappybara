import React from 'react';
import {
  View, 
  Text, 
  Image,
  TouchableOpacity
} from 'react-native';

/*  Images  */
import ProfilePicture from "../../../../../Images/pp.jpg"

/*  Style  */
import HeaderHave_Style from './HeaderHave_Style';





const style = HeaderHave_Style();





const HeaderHave = ({  navigate, username  }) => {
  return (
    <View style={  style.container  }>




      <View style={  style.containerArea  }>
        <TouchableOpacity 
          style={  style.containerAreaButton  }
          onPress={() => {
            navigate("User")
          }}
        >
          <Text style={  style.containerAreaButtonText  }>
            Olá, <Text style={  style.containerAreaButtonTextHighLight  }>{  username  }</Text>
          </Text>
        </TouchableOpacity>
      </View>


      <View style={  style.containerFigure  }>
        <Image 
          style={  style.containerFigureImage  } 
          source={ProfilePicture}
        />
      </View>




    </View>
  )
}

export default HeaderHave;