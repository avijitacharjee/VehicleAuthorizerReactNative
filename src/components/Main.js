import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ToastAndroid
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Tts from 'react-native-tts';
class Main extends Component {
  state = {
    barcodeDetected: false,
    validBarcode : false
  }
  barcodeRecognized = ({ barcodes }) => {
    barcodes.forEach(barcode => {
      if(barcode.data==='Avijit'){
        ToastAndroid.show("QR code is valid. Permission Granted to enter..",ToastAndroid.SHORT);
        this.setState({
          barcodeDetected : true,
          validBarcode : true
        });
      }else {
        ToastAndroid.show("QR code detected. But not valid or time expired..",ToastAndroid.SHORT);
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
    //Tts.speak('Welcome to our automated parking system..');
    return (
      <>
        <View style ={styles.container}>
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
export default Main;
const styles = StyleSheet.create({
  container : {
    backgroundColor : '#009387',
    backgroundColor : '#ffffff',
    height : '100%',
    width : '100%',
    padding : '20%'
  }
  ,
  camera : {
    height :'70%',
    },
  welcome : {
    fontSize : 20,
    textAlign : "center"
  }
});
