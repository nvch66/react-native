import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default function Header({navigation,title}) {
    return (
        <View style={styles.header}>
        <Icon 
        name='menu'
        onPress={()=>navigation.openDrawer()}
        />
             <View >
                <Text style={styles.headerText}>{title}</Text>
            </View> 
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        flexDirection: 'row',
        alignSelf:'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
        marginLeft:10
    }
})