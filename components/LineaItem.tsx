import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from './Icon';

const styles = StyleSheet.create({
    
    item: {
      backgroundColor: '#cccc',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 4,
      flex: 1,
      flexDirection: 'row'
    },
    title: {
      fontSize: 12,
      paddingLeft: 10
    },
  });

export const LineaItem = (props:any) => {
    const {item} = props;
    return (
        <>
            <View style={styles.item}>
                <Icon
                    name='tag'
                    size={10}
                    color="#000"
                ></Icon> 
                <Text style={styles.title}>
                    
                    {item['@expand'].codigo_marca.nombre_marca}: {item.nombre_linea}
                </Text>
            </View>
        </>
      )
}
