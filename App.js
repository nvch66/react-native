

import React from 'react';
import space from './assets/space.jpg';
import {ImageBackground} from 'react-native';



import Navigator from './routes/drawer'
import { StatusBar } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <ImageBackground source={space} style={{flex: 1,
    resizeMode: "cover",
    justifyContent: "center"}}>
    <Navigator />
    </ImageBackground>
    </>
  );
};



export default App;
