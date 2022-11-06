import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PocketBase from 'pocketbase';
import { View } from '../components/Themed';
import { MarcaItem } from '../components/MarcaItem';

export default function TabTwoScreen() {

  const client = new PocketBase('http://127.0.0.1:8090');

  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    getMarcas()
  })

  const getMarcas = () => {
    client.records.getList('marca', 1, 50).then((result: any) => {
      // success...
      

      setMarcas(result.items)

    }).catch((error) => {
      // error...
      console.log('Error:', error);
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={marcas}
        renderItem={MarcaItem}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
