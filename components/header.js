import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ width: "100%" }}>
        <Text style={styles.header}>{this.props.title}</Text>
        <View style={styles.content}>{this.props.children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1
  },
  content: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1
  }
});
