import { StyleSheet, Text, TextInput, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreateStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import PinCode from './src/components/PinCode';
import Home from './screens/Home';
import Details from './screens/Details'
import AppLoading from 'expo-app-loading';
// const Stack = createBottomTabNavigator();
const Stack = CreateStackNavigator();

const theme = {
  ...DefaultTheme.colors,
  backgroundColor: 'transparent'
}
const App = () => {
  const [loaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMediumBold: require('./assets/fonts/Inter-MediumBold.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  })
  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


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
