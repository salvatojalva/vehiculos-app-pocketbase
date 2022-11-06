import { FlatList, StyleSheet } from 'react-native';
import PocketBase from 'pocketbase'


import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
import { VehiculoItem } from '../components/VehiculoItem';
import { LineaItem } from '../components/LineaItem';
import { ColorItem } from '../components/ColorItem';

export default function TabFourScreen({ navigation }: RootTabScreenProps<'TabFour'>) {
  const backend = new PocketBase('http://127.0.0.1:8090');

  const [lineas, setlineas] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    getLineas()
  })

  const getLineas = () => {
    backend.records.getList('color', 1, 50,{}).then((result: any) => {
      // success...
      setlineas(result.items)
      setIsRefreshing(false)

    }).catch((error) => {
      // error...
      setIsRefreshing(false)
      console.log('Error:', error);
    });
  }

  const onRefresh = () => {
    //set isRefreshing to true
    setIsRefreshing(true)
    getLineas()
    // and set isRefreshing to false at the end of your callApiMethod()
}

  return (

    <View style={styles.container}>
      <FlatList
        refreshing={isRefreshing}
        data={lineas}
        renderItem={ColorItem}
        onRefresh={onRefresh}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
