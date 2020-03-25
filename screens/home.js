import React, { useState } from 'react';
import { StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList,
  ImageBackground,
  Modal,
  TextInput } from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import Card from '../components/card';
import space from '../assets/space.jpg';
import {Icon} from 'react-native-elements';
import AutoForm from '../components/Form'

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);
  const [openModal,setModal] = useState(false);
  const [formData,setFormData] = useState({
    title :'',
    body :'',
    rating:null,
  })
  const addReview = (item) => {
    const id = String(Math.random());
    const items = [...reviews,{...item,key:id}];
    setReviews(items)
  }

  return (
    <ImageBackground 
      source={space} 
      style={{
        flex: 1,
        resizeMode: "cover"}}>
        <Modal visible={openModal}>
        <Icon name='cancel' size={50}  color='red' onPress={()=>setModal(false)}/>
          
            <AutoForm addReview={addReview}/>
          
        </Modal>
      
      <View style={GlobalStyles.container} >
        <Icon name='add' size={50} color='green'  onPress={()=>setModal(true)}/>
        <FlatList data={reviews} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
            <Card>
              <Text>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )} />
      </View>
    </ImageBackground>
  );
}
