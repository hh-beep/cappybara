import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";





const style = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
  },
  ContainerText: {
    fontSize: 30,
    color: "#072D16"
  }
})





const Date = () => {
  return (
    <View style={  style.Container  }>
      <Text style={  style.ContainerText  }>Date page!</Text>
    </View>
  )
}

export default Date;