import React from 'react';
import CurrencyButton from './components/CurrencyButton';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Text,
  Pressable
} from 'react-native';
import { useState } from 'react';
import Snackbar from 'react-native-snackbar';
import { currencyByPound } from './constants';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState("")
  const [targetCurrency, setTargetCurrency] = useState("")
  const [resultValue, setResultValue] = useState("")

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }
    const inputAmount = parseFloat(inputValue)
    if ((!isNaN(inputAmount))) {
      const convertedValue = inputAmount * targetValue.value
      const result = ` ${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }
  }

  return (
    <>
      <StatusBar backgroundColor={"black"} />
      <View style={styles.container} >
        <View style={styles.topContainer}>
          <View style={styles.poundsContainer}>
            <Text style={styles.pound} >£</Text>
            <TextInput style={styles.inputText} keyboardType='number-pad' maxLength={14} placeholder='Enter amount in Egypt Pound ' onChangeText={setInputValue} value={inputValue} />
          </View>
          {resultValue && <Text style={styles.resultTxt}>{resultValue}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByPound}
            keyExtractor={(item) => (item.name)}
            renderItem={({ item }) => (
              <Pressable style={[styles.button, targetCurrency === item.name && styles.selected]} onPress={() => buttonPressed(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  pound: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  poundsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: { fontSize: 20, fontWeight: "500", borderWidth: 0.6, borderRadius: 5, borderCurve: "continuous" },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 65,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});


export default App;
