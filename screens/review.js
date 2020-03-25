import React from 'react';
import { View ,Text} from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import Card from '../components/card'
import {Rating} from 'react-native-elements'
import {ImageBackground} from 'react-native';
import space from '../assets/space.jpg';

export default function Review({navigation}) {
    return(
        <ImageBackground source={space} style={{flex: 1,
            resizeMode: "cover"}}>
            <View style={GlobalStyles.container}>
                <Card>
                    <Text style={{fontWeight:'bold',fontSize:20}}>{navigation.getParam('title')}</Text>
                    <Text>{navigation.getParam('body')}</Text>
                    <Rating
                        startingValue={Number(navigation.getParam('rating'))}
                        readonly
                        type='heart'
                        ratingCount={5}
                        imageSize={30}
                        style={{alignItems:'flex-start'}}/>
                </Card>
            </View>
        </ImageBackground> 
    );
}