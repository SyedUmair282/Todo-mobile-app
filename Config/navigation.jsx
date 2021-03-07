

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from '../screen/todo'

const Stack = createStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todo" component={Todo} options={{title:'Todo Application',
          headerStyle: {
            backgroundColor: '#5132be',
          }}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;