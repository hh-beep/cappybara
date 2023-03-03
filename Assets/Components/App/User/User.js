import React from "react";

/*  RN Navigation  */
import {  createStackNavigator  } from "@react-navigation/stack"

/*  Components  */
import Edit from "./Edit/Edit";
import Login from "./Login/Login";
import Singin from "./Singin/Singin";
import Loading from "./Loading/Loading";





const User = () => {
  
  const Stack = createStackNavigator();

  
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        
      })}
      initialRouteName="Loading"
    >


        <Stack.Screen
          name="Loading"
          component={  Loading  }
        />
        
        
        <Stack.Screen
          name="Singin"
          component={  Singin  }
        />


        <Stack.Screen 
          name="Login"
          component={  Login  }
        />
    

      <Stack.Screen
        name="Edit"
        component={  Edit  }
      />

    
    
    </Stack.Navigator>
  )
}

export default User;