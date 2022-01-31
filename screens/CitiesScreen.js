import { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import CityBox from '../components/CityBox';

export default () => {
  const [data, setData] = useState({});

  const callData = async () => {
    const response = await fetch('https://www.el-tiempo.net/api/json/v2/home');
    const realResponse = await response.json();
    setData(realResponse);
  }

  useEffect(() => {
    callData();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data.ciudades}
        renderItem={({item}) => <CityBox name={item.nameProvince} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

});
