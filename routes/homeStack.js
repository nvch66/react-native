import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Review from '../screens/review';
import Header from '../shared/header'
import React from 'react';


const screens = {
    Home : {
        screen: Home,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header title="GameZone" navigation={navigation}/>
            }
            
            
        }
    },
    Review : {
        screen:Review,
        navigationOptions:{
            title:'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);