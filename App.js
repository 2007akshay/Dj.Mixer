import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default class App extends Component {
  AlertBox1 = () => {
    alert('I am a alert box . playing (creaper aw man )');
  };
  AlertBox2 = () => {
    alert('I am a alert box . playing (Belever)');
  };
  AlertBox3 = () => {
    alert('I am a alert box . playing ( Gadi lamborghini )');
  };
  AlertBox4 = () => {
    alert('I am a alert box . playing ( Yallgar )');
  };
  render() {
    return (
      
      <View>
        <View
          style={{ marginTop: 80, marginLeft: 80, width: 200, height: 100 }}>
          <Button
            color="red"
            title="Sound 1"
            onPress={this.AlertBox1}
          />
        </View>
        <View
          style={{ marginTop: 30, marginLeft: 80, width: 200, height: 100 }}>
          <Button
            color= "blue"
            title="Sound 2"
            onPress={this.AlertBox2}
          />
        </View>
        <View
          style={{ marginTop: 30, marginLeft: 80, width: 200, height: 100 }}>
          <Button
            color= "green"
            title="Sound 2"
            onPress={this.AlertBox3}
          />
        </View>
        <View
          style={{ marginTop: 30, marginLeft: 80, width: 200, height: 100 }}>
          <Button
            color= "orange"
            title="Sound 2"
            onPress={this.AlertBox4}
          />
        </View>
      </View>
    );
  }
}
