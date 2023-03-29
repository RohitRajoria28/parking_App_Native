import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Components/Home';
import ParkingSpace from './Components/ParkingSpace';
import CheckOutPage from './Components/CheckOutPage';


const Stack=createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ParkingSpace" component={ParkingSpace} />
        <Stack.Screen name="CheckOutPage" component={CheckOutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;