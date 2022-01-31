import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

export default ({title, desc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <FlatList
          data={desc}
          renderItem={({item}) => <Text>- {item}</Text>}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#000000',
  }
})
