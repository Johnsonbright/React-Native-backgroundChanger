import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

function App(): JSX.Element {
  

  const [randomBg, setRandombg] = useState('#ffffff');
  const generateColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * hex.length)];
      }
      setRandombg(color)
  }

  return (
  <>
    <StatusBar backgroundColor={randomBg} />
    <View style={[styles.container, {backgroundColor: randomBg}]}>
      <TouchableOpacity onPress={ () => generateColor()}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}> Press Me </Text>
        </View>
      </TouchableOpacity>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 10,
    backgroundColor: '#6A1B',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase'
  }
});
 
export default App;