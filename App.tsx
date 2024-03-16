// Installing: 
// yarn add react-native-vector-icons
// yarn add @types/react-native-vector-icons --dev


import { StyleSheet, Text, View } from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary, fontSize: fonts.size.xlg }}>
        Muhammad Asif
        <AntDesign name='stepforward' size={25} />
      </Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold'
  },
  // text: {
  //   color: 'white',
  //   fontSize: 30
  // }
})