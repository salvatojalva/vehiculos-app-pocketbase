import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from './Icon';

const styles = StyleSheet.create({
    
    item: {
      backgroundColor: '#e9e9e9',
      padding: 10,
      marginVertical: 3,
      marginHorizontal: 16,
      borderRadius: 4
    },
    title: {
      fontSize: 15,
      fontWeight: '600'
    },
    details: {
        fontSize: 12
    },
    content:{
        marginVertical: 3,
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        textAlignVertical: 'center'
    }
  });

export const VehiculoItem = (props:any) => {
    const {item} = props;
  return (

    <>
        <View style={styles.item}>
            <Text style={styles.title}> 

                <Icon
                    name='car'
                    color={item['@expand'].codigo_color.hex}
                    size={15}
                /> {item['@expand'].codigo_linea['@expand'].codigo_marca.nombre_marca} {item['@expand'].codigo_linea.nombre_linea} {item.codigo_anio} 
                
            </Text>
            
            <View style={styles.content}>
                <Icon
                    name='bolt'
                    color='yellow'
                    size={10}
                />
                <Text style={styles.details}> {item.tipo_gasolina} </Text>    
            </View>

            <View style={styles.content}>
                <Icon
                    name='cogs'
                    color='#000000'
                    size={10}
                />
                <Text style={styles.details}> {item.tipo_caja} </Text>    
            </View>
            
        </View>
    </>
  )
}
