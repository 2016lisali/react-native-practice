import { StyleSheet, TextInput, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function App() {
    const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text>INPUT A 4 DIGITS PIN</Text>
      <TextInput style={styles.textInput} defaultValue="4 digits pin"/>
      <Button title="Go to Home" onPress={()=> nav.navigate('Home')} />
    </View>
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
