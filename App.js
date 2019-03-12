/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  ScrollView
} from "react-native";

import { testData } from "./test-data.json";
import StatsHolder from "./components/stats-holder";
import ListHolder from "./components/list-holder";
import Header from "./components/header.js";

const items = Object.keys(testData);
const skills = testData.Umiejetnosci.split(",");
const abilities = testData.Zdolnosci.split(",");
const inventory = testData.Wyposazenie.split(",");
const profStart = testData.ProfWe.split(",");
const profOut = testData.ProfWy.split(",");

type Props = {};
export default class App extends Component<Props> {
  state = {
    text: "Nazwa",
    skill: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={{ width: "100%", height: 50, backgroundColor: "#ccc" }}
          selectedValue={this.state.text}
          onValueChange={val => this.setState({ text: val })}
        >
          {items.map(i => (
            <Picker.Item key={i} label={i} value={i} />
          ))}
        </Picker>
        <ScrollView>
          <StatsHolder stats={testData} />
          <Header style={styles.header} title="Umiejętności">
            <ListHolder
              style={{ margin: 5 }}
              items={skills}
              onItemSelected={val => this.setState({ skill: val })}
            />
          </Header>
          <Header style={styles.header} title="Zdolności">
            <ListHolder
              style={{ margin: 5 }}
              items={abilities}
              onItemSelected={val => this.setState({ skill: val })}
            />
          </Header>
          <Header style={styles.header} title="Wyposażenie">
            <ListHolder
              style={{ margin: 5 }}
              items={inventory}
              onItemSelected={val => this.setState({ skill: val })}
            />
          </Header>
          <Header style={styles.header} title="Profesje wstępne">
            <ListHolder
              style={{ margin: 5 }}
              items={profStart}
              onItemSelected={val => this.setState({ skill: val })}
            />
          </Header>
          <Header style={styles.header} title="Profesje wyjściowe">
            <ListHolder
              style={{ margin: 5 }}
              items={profOut}
              onItemSelected={val => this.setState({ skill: val })}
            />
          </Header>
          <Header style={styles.header} title="Opis">
            <Text selectable={true} style={{ margin: 5 }}>
              {testData.Opis}
            </Text>
          </Header>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerContent: {
    fontSize: 16,
    textAlign: "center",
    margin: 5
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  header: {
    margin: 5
  },
  scrollView: {
    padding: 10
  },
  picker: {
    margin: 15,
    backgroundColor: "#e1f5fe",
    width: "100%"
  }
});
