// Installing: 
// yarn add react-native-vector-icons
// yarn add @types/react-native-vector-icons --dev
// yarn add react-native-video
// yarn add react-hook-form
// yarn add react-native-image-picker
// yarn add expo-modules
// yarn add expo-camera


import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen/PostUploadScreen';



const App = () => {
  return (
    <View style={styles.app}>
      <PostUploadScreen />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})