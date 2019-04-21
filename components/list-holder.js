import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class ListHolder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        {this.props.items.map((val, key) => (
          <TouchableOpacity
            key={key}
            style={styles.touchableOpacity}
            onPress={() => this.props.onItemSelected(val)}
          >
            <Text style={styles.text}>{val}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  touchableOpacity: {
    backgroundColor: "#0277bd",
    borderRadius: 10,
    margin: 2,
    padding: 5
  },
  text: {
    color: "white"
  }
});
