import React from 'react';

/*  Navigation */
import {  NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*  Components */
import First from './Assets/Components/First/First';
import AppRoutes from './Assets/Components/App/AppRoutes';
import Load from './Assets/Components/Load/Load';






const App = () => {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
        initialRouteName="Load"
      >




        <Stack.Screen 
          name="Load"
          component={  Load  }
        />

        <Stack.Screen
          name="AppRoutes"
          component={  AppRoutes  }
        />

        <Stack.Screen
          name="First"
          component={  First  }
        />






      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;