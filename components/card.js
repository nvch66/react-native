import React from 'react';
import {View,StyleSheet} from 'react-native';


export default function Card(props) {
    return(
       <View style={styles.cardContainer}>
          {props.children}
       </View> 
    )
}

const styles=StyleSheet.create({
    cardContainer:{
        borderRadius:6,
        elevation:3,
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        backgroundColor:'#fff',
        shadowOpacity:0.3,
        marginHorizontal:16,
        marginVertical:4,
        padding:8
    }
})