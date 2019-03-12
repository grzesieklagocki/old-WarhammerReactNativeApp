import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class ListHolder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        {this.props.items.map(val => (
          <TouchableOpacity
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
    justifyContent: "center",
    flexWrap: "wrap"
  },
  touchableOpacity: {
    padding: 5,
    margin: 2,
    backgroundColor: "#0277bd",
    borderRadius: 10
  },
  text: {
    color: "white"
  }
});
