import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

// Our Universal Value Would be metre

const data = [
  { label: "Centimetre(cm)", value: "cm" },
  { label: "Metre(m)", value: "m" },
  { label: "Kilometre(Km)", value: "km" },
  { label: "Inches(in)", value: "in" },
];

const App = () => {
  const [val, setval] = useState(null);
  const [val1, setval1] = useState(null);
  const [text, onChangeText] = useState("");
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const convert = () => {
    if (value == value1) {
      Alert.alert("Choose Different Values Please");
    }
    if (value == "cm") {
      setval(parseInt(text) / 100);
    } else if (value == "m") {
      setval(parseInt(text));
    } else if (value == "km") {
      setval(parseInt(text) * 1000);
    } else if (value == "in") {
      setval(parseInt(text) / 39.37);
    } else if (value == null) {
      Alert.alert("Please Choose A Value");
    }
    if (value1 == "cm") {
      setval1(val * 100);
    } else if (value1 == "m") {
      setval1(val);
    } else if (value1 == "km") {
      setval1(val / 1000);
    } else if (value1 == "in") {
      setval1(val * 39.37);
    } else if (value1 == null) {
      Alert.alert("Please Choose A Value");
    }
  };

  const renderLabel = () => {
    if (value || isFocus & value1 || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Select Value Type
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.master}>
      <Text style={styles.heading}>Value in:</Text>
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Value" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? "blue" : "black"}
              name="Safety"
              size={20}
            />
          )}
        />
        <TextInput
          style={{
            fontSize: 20,
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            marginTop: 10,
          }}
          placeholder="Enter Your Value Amount"
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      <Text style={styles.heading}>Value To Change in:</Text>
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Value" : "..."}
          value={value1}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue1(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? "blue" : "black"}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          convert();
        }}
      >
        <Text>Convert</Text>
      </TouchableOpacity>
      <Text style={styles.answer}>Your Value is: {val1}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  answer: {
    fontSize: 30,
    color: "white",
    backgroundColor: "#09a2f2",
    margin: 20,
    maxWidth: 500,
    padding: 20,
    borderRadius: 20,
  },
  button: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "pink",
    alignItems: "center",
    width: 300,
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    marginLeft: 0,
  },
  container: {
    padding: 16,
    marginBottom: 50,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 300,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
