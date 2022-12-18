import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import ParkingScreen from "./screens/ParkingScreen";
import React from "react";
import { Provider } from "react-redux";
import {store} from "./components/store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Парковки университета' component={Home} />
          <Stack.Screen name='Parking' component={ParkingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}

