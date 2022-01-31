import {useState, useEffect} from 'react';

import {SafeAreaView, Text, StyleSheet, ScrollView}from 'react-native';

import DayContentBox from '../components/DayContentBox';

export default () => {
  const [data, setData] = useState({});
  
  const callData = async () => {
    const response = await fetch('https://www.el-tiempo.net/api/json/v2/home');
    const realData = await response.json();
    setData(realData);
  }

  useEffect(() => {
    callData();
  }, [])

  console.log(data.today.p)
  /*const dayInfo = {
    today: data.today.p, tomorrow: data.tomorrow.p
  }*/
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DayContentBox title="Hoy" desc={data.today.p} />
        <DayContentBox title="Mañana" desc={data.tomorrow.p} />
      </ScrollView>
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
