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

export const ColorItem = (props:any) => {
    const {item} = props;
    return (
        <>
            <View style={styles.item}>
                <Icon
                    name='car'
                    size={10}
                    color={item.hex}
                ></Icon> 
                <Text style={styles.title}>
                    {item.color}
                </Text>
            </View>
        </>
      )
}
