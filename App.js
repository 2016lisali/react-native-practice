import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Details from './screens/Details'
import InterBold from './assets/fonts/Inter-Bold.ttf';
import InterSemiBold from './assets/fonts/Inter-SemiBold.ttf';
import InterMedium from './assets/fonts/Inter-Medium.ttf';
import InterRegular from './assets/fonts/Inter-Regular.ttf';
import InterLight from './assets/fonts/Inter-Light.ttf';
// const Stack = createBottomTabNavigator();
const Stack = createStackNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		backgroundColor: 'transparent'
	}

}
const App = () => {
	const [loaded] = useFonts({
		InterBold,
		InterSemiBold,
		InterMedium,
		InterRegular,
		InterLight,
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

export default App;
