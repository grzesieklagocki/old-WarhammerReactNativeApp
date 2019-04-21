import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          margin: 5,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#90caf9",
          backgroundColor: "white"
        }}
      >
        <Text style={styles.header}>{this.props.title}</Text>
        <View style={styles.content}>{this.props.children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "white",
    // color: "white",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#90caf9"
    // borderColor: "black",
    // borderWidth: 1
  },
  content: {
    padding: 5
    // backgroundColor: "white"
    // borderColor: "black",
    // borderWidth: 1
  }
});
