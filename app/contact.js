import { StyleSheet, Text, View, Pressable, Image, } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; //X
import Feather from '@expo/vector-icons/Feather'; //O
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; //Grid
import { useState } from 'react'; 

export default function TicTacToe() {
  const [gameBoard, setGameBoard] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  const [turn, setTurn] = useState(true);
  const [available, setAvailable] = useState([1,2,3,4,5,6,7,8,9]);
  
  
  const move = (turn, num) => {
    if(turn){
      setGameBoard[num] = "X"
      available[num-1].remove()
    }
    else {
      
    }
  }
  

  return(
    <View style = {styles.container}>
      <View style={{ ...styles.press, marginRight: 285, marginBottom: 285}}> {/*1*/}
        <Pressable onPress={move}/>
      </View>
      <View style={{ ...styles.press, marginBottom: 285}}> {/*2*/}
        <Pressable onPress={move}/>
      </View>
      <View style={{ ...styles.press, marginBottom: 285, marginLeft: 285}}> {/*3*/}
        <Pressable onPress={move}/>
      </View>
      <View style={{ ...styles.press, marginRight: 285}}> {/*4*/}
        <Pressable onPress={move}/>
      </View>
      <View style={{ ...styles.press}}> {/*5*/}
        <Pressable onPress={move}/>
      </View>
      <View style={{ ...styles.press, marginLeft: 285}}> {/*6*/}
        <Pressable onPress={move}/>
      </View>
      <View style={{ ...styles.press, marginTop: 285, marginRight: 285}}> {/*7*/}
        <Pressable onPress={move}/>
      </View>
      <View style={{ ...styles.press, marginTop: 285}}> {/*8*/}
        <Pressable onPress={move}/>
      </View>
      <View style={{ ...styles.press, marginTop: 285, marginLeft: 285}}> {/*9*/}
        <Pressable onPress={move}/>
      </View>
      <Image 
        source={require('../assets/image-removebg-preview.png')} 
        style={styles.image} 
      />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  press: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    position: 'absolute'
  }
});
