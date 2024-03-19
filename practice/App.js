import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Camera from './src/components/camera';
import Video from  './src/components/video'
import Todo from './src/components/imageTodo'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Camera/> */}
      {/* <Video/> */}
    <Todo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
