import React from 'react';
import { View,Text } from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import Cards from '../components/card'
import {ImageBackground} from 'react-native';
import space from '../assets/space.jpg';

export default function About() {
    return(
        <ImageBackground 
            source={space} 
            style={{flex: 1,
            resizeMode: "cover"}}>
            <View style={GlobalStyles.container}>
                <Cards>
                    <Text>About Page</Text>
                </Cards>
            </View>
        </ImageBackground>
    )
}