import React from "react";
import {  ScrollView  } from "react-native";

/*  Components */
import Header from "./Header/Header";

/*  Style  */
import Home_Style from "./Home_Style";





const style = Home_Style();





const Home = ({  navigation  }) => {
  return (
    <ScrollView style={  style.Container  }>
      



      <Header 
        navigation={  navigation  }
      />



    </ScrollView>
  )
}

export default Home;