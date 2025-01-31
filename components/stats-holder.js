import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./header";

export default class StatsHolder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header title="Statystyki" style={{ padding: 5 }}>
        <View style={styles.row}>
          {statNames[0].map((stat, i) => (
            <Text key={i} style={styles.headerField}>
              {stat}
            </Text>
          ))}
        </View>
        <View style={styles.row}>
          {statNames[0].map((stat, i) => (
            <Text key={i} style={styles.field}>
              {this.props.stats[stat]}
            </Text>
          ))}
        </View>
        <View style={styles.row}>
          {statNames[1].map((stat, i) => (
            <Text key={i} style={styles.headerField}>
              {stat}
            </Text>
          ))}
        </View>
        <View style={styles.row}>
          {statNames[1].map((stat, i) => (
            <Text key={i} style={styles.field}>
              {this.props.stats[stat]}
            </Text>
          ))}
        </View>
      </Header>
    );
  }
}

const statNames = [
  ["WW", "US", "K", "Odp", "Zr", "Int", "SW", "Ogd"],
  ["A", "Zyw", "S", "Wt", "Sz", "Mag", "PO", "PP"]
];

const styles = StyleSheet.create({
  row: {
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1
  },
  field: {
    width: "12.5%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    backgroundColor: "white"
  },
  headerField: {
    width: "12.5%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "black"
  }
});
