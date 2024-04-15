import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#FFFFFF');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container]}>
        <View style={[styles.circle, {backgroundColor: randomBackground}]} />

        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.square, {backgroundColor: randomBackground}]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 10,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  actionBtnTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
  },
  square: {
    height: 100,
    width: 100,
    marginTop: 50,
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 50,
  },
});

export default App;
