import {SafeAreaView, Text, StyleSheet}from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pantalla de home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})
