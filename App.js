
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [ticTacToe, setTicTacToe] = useState(Array(9).fill(null))
  console.log("ticTacToe: ", ticTacToe);
  const [gamer, setGamer] = useState('X')
  const [winner, setWinner] = useState(null);

  const winnerCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ]

  useEffect(() => {
    winnerCombo.map(([a, b, c]) => {
      if (ticTacToe[a] && ticTacToe[a] === ticTacToe[b] && ticTacToe[a] === ticTacToe[c]) {
        setWinner(`The winner is ${ticTacToe[a]}`);
        return;
      }
      if (ticTacToe.every(square => square !== null)) {
        setWinner('Draw')
      }
    })
  }, [gamer])

  const handleBoxClick = (index) => {
    if (winner || ticTacToe[index]) {
      return
    }
    let arrayUpdate = [...ticTacToe]
    arrayUpdate[index] = gamer;
    setTicTacToe(arrayUpdate)
    setGamer(gamer === 'X' ? 'O' : 'X')
  }



  const handleLongPress = (index) => {
    let arrayUpdate = [...ticTacToe]
    arrayUpdate[index] = gamer;
    setTicTacToe(arrayUpdate)
    setGamer(gamer === 'X' ? 'O' : 'X')
    setWinner(null)
  }

  const handleResat = () => {
    setTicTacToe(Array(9).fill(null));
    setWinner(null)
    setGamer('X')
  }

  const onLongPressReset = () => {
    let flippedArray = [];
    for (let i = 0; i < ticTacToe.length; i++) {
        if (ticTacToe[i] === "X") {
            flippedArray.push("O");
        } else if (ticTacToe[i] === "O") {
            flippedArray.push("X");
        } else {
            flippedArray.push(ticTacToe[i]); 
        }
    }
    setTicTacToe(flippedArray);
    setGamer(gamer === 'X' ? 'O' : 'X')
};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Tic Tac Toe
      </Text>
      <Text style={[styles.winnerText, { color: winner === 'Draw' ? "red" : 'green' }]}> {winner}</Text>
      <View style={{ width: '100%', marginTop: 60 }}>
        <Text style={{ textAlign: 'left', fontSize: 10, marginLeft: 45 }}>First player X</Text>
      </View>
      <View style={styles.innerContainer}>
        {
          ticTacToe.map((item, index) => {
            return (
              <TouchableOpacity key={index} delayLongPress={1500} onLongPress={() => handleLongPress(index)} onPress={() => handleBoxClick(index)} style={styles.box}>
                <Text style={styles.heading} >{item === 'BM' ? "" : item}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <TouchableOpacity delayLongPress={3000} onPress={() => handleResat()} onLongPress={() =>onLongPressReset()} style={styles.reSet}>
        <Text style={styles.text}> Reset </Text> 
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    paddingVertical: 30,
    color: '#000'
  },
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000'
  },
  winnerText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'green'
  },
  reSet:{ marginVertical: 40 ,backgroundColor:'silver',padding:10,borderRadius:8},
  text:{
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  }
});
