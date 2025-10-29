import { StyleSheet, Text, View, Pressable, Image, } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; //X
import Feather from '@expo/vector-icons/Feather'; //O
import { useState } from 'react'; 

export default function TicTacToe() {
  const [gameBoard, setGameBoard] = useState("-", "-", "-", "-", "-", "-", "-", "-", "-");
  const [claimed, setClaimed] = useState(false);
  
  const move = (x) => {
    // gameBoard[x] = "X"
    setClaimed(true)
    
  }
  

  return(
    <View style = {styles.container}>
      <View style={{ ...styles.press, marginRight: 285, marginBottom: 285}}> {/*1*/}
        if(claimed){
          <Image 
            source={require('../assets/X.png')} 
            style={styles.image} 
          />
        }
        <Pressable onPress={
          move(0)
        }/>
      </View>
      <View style={{ ...styles.press, marginBottom: 285}}> {/*2*/}
        <Pressable onPress={move(1)}/>
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
        source={require('../assets/grid.png')} 
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
