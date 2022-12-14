import { FlatList, StyleSheet } from 'react-native';
import PocketBase from 'pocketbase'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
import { VehiculoItem } from '../components/VehiculoItem';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const backend = new PocketBase('http://127.0.0.1:8090');

  const [vehiculos, setVehiculos] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    getCarros()
  })

  const getCarros = () => {
    backend.records.getList('vehiculo', 1, 50,{
      expand: 'codigo_linea.codigo_marca, codigo_color'

    }).then((result: any) => {
      // success...
      setVehiculos(result.items)
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
    getCarros()
    // and set isRefreshing to false at the end of your callApiMethod()
}

  return (

    <View style={styles.container}>
      <FlatList
        refreshing={isRefreshing}
        data={vehiculos}
        renderItem={VehiculoItem}
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
