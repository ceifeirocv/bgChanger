import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randonBg, setRandonBg] = useState('#F8F4E1');

  function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function handlePress() {
    setRandonBg(generateRandomColor());
  }

  return (
    <>
      <StatusBar backgroundColor={`${randonBg}`}></StatusBar>
      <View style={[styles.container, {backgroundColor: `${randonBg}`}]}>
        <TouchableOpacity onPress={handlePress}>
          <View style={[styles.actionBtn]}>
            <Text style={[styles.actionBtnText]}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F8F4E1',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#543310',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#F8F4E1',
  },
  actionBtnText: {
    color: '#F8F4E1',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
