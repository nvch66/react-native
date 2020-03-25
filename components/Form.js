import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {Form, Item, Input, Button,Text ,Icon,Picker} from 'native-base';
export default class AutoForm extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
                title:'',
                rating: '1',
                body:''
        };
      }
      onValueChange(val) {
        this.setState({
          rating: val
        });
      }
     handlePress=()=>{
        this.props.addReview(this.state)
        this.setState({
                title:'',
                rating: '1',
                body:''
        })
     }
    

  render() {
    return (
     
          <Form style={{padding:16}}>
            <Item rounded style={styles.input} >
              <Input placeholder="Review Title"
                onChangeText={text=>this.setState({
                    title:text
                })}
                value={this.state.title} />
              <Icon name={null} />
            </Item>
            <Item rounded style={styles.input}>
              <Input
                multiline
                placeholder="Body"
                onChangeText={text=>this.setState({
                    body:text
                })}
                value={this.state.body} />
            </Item>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={this.state.rating}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
            <Button 
                rounded 
                style={{marginVertical:8,justifyContent:'center'}}
                onPress={this.handlePress}>
            <Text>Submit</Text>
          </Button>
          </Form>
        
     
    );
  }
}

const styles= StyleSheet.create({
    input:{
        marginVertical:8
    }
})