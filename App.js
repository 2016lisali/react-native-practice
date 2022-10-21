import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PinCode from './src/components/PinCode';

const Stack = createBottomTabNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="PinCode" component={PinCode} />
    {/* <Stack.Screen name="Catalog" component={CatalogScreen} /> */}
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    color: 'red',
  }
});

export default App;
