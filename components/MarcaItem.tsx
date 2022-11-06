import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    item: {
      backgroundColor: '#cccc',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 4
    },
    title: {
      fontSize: 12,
    },
  });

export const MarcaItem = (props:any) => {

    const {item} = props;

  return (
    <>
        <View style={styles.item}>
            <Text style={styles.title}>
                Marca: {item.nombre_marca}
            </Text>
        </View>
    </>
  )
}
