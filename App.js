import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Tts from 'react-native-tts';
class App extends Component {
  state = {
    barcodeDetected: false,
    validBarcode : false
  }
  barcodeRecognized = ({ barcodes }) => {
    barcodes.forEach(barcode => {
      if(barcode.data==='Avijit'){
        this.setState({
          barcodeDetected : true,
          validBarcode : true
        });
      }else {
        this.setState({
          barcodeDetected : true,
          validBarcode : false
        });
      }
    })
  };
  componentDidUpdate(prevState){
    if(prevState.barcodeDetected == this.state.barcodeDetected){
      Tts.speak('hi');
    }
  }
  render(){
    Tts.speak('Welcome to our automated parking system..');
    return (
      <>
        <View>
        <Text style={styles.welcome}>Vehicle Parking Camera</Text>
          <RNCamera
            ref={
              ref=>{
                this.camera = ref;
              }
            }
            style={styles.camera}
            onGoogleVisionBarcodesDetected={this.barcodeRecognized}
          />
        
        </View>
      </>
    )
  }
}
export default App;
const styles = StyleSheet.create({
  camera : {
    width : '100%',
    backgroundColor : "#000000",
    height :'100%'
  },
  welcome : {
    fontSize : 20,
    textAlign : "center"
  }
});
