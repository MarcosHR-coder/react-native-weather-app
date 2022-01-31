import { View, Text, StyleSheet, Dimensions} from "react-native";

export default ({name}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: Dimensions.get('window').width,
  },
  name: {
    fontSize: 16,
    color: '#000000',
  }
})
