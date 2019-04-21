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
  ScrollView,
  DrawerLayoutAndroid
} from "react-native";

import { testData } from "./test-data.json";
import StatsHolder from "./components/stats-holder";
import ListHolder from "./components/list-holder";
import Header from "./components/header.js";
import NavigationPage from "./components/navigation-page.js";

const items = Object.keys(testData);
const skills = testData.skills.split(",");
const talents = testData.talents.split(",");
const trippings = testData.trippings.split(",");
const careerEntries = testData.careerEntries.split(",");
const careerExits = testData.careerExits.split(",");

type Props = {};
export default class App extends Component<Props> {
  state = {
    text: "Nazwa",
    skill: ""
  };
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => {
          return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
              <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
                Umiejętności
              </Text>
            </View>
          );
        }}
      >
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
                items={talents}
                onItemSelected={val => this.setState({ skill: val })}
              />
            </Header>
            <Header style={styles.header} title="Wyposażenie">
              <ListHolder
                style={{ margin: 5 }}
                items={trippings}
                onItemSelected={val => this.setState({ skill: val })}
              />
            </Header>
            <Header style={styles.header} title="Profesje wstępne">
              <ListHolder
                style={{ margin: 5 }}
                items={careerEntries}
                onItemSelected={val => this.setState({ skill: val })}
              />
            </Header>
            <Header style={styles.header} title="Profesje wyjściowe">
              <ListHolder
                style={{ margin: 5 }}
                items={careerExits}
                onItemSelected={val => this.setState({ skill: val })}
              />
            </Header>
            <Header margin={20} style={styles.header} title="Opis">
              <Text selectable={true} style={{ margin: 5 }}>
                {testData.description}
              </Text>
            </Header>
            <NavigationPage url={"Profesje"} />
          </ScrollView>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "#F5FCFF",
    backgroundColor: "#e3f2fd",
    flex: 1,
    justifyContent: "center"
  },
  headerContent: {
    fontSize: 16,
    margin: 5,
    textAlign: "center"
  },
  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center"
  },
  header: {
    margin: 5
  },
  scrollView: {
    padding: 10
  },
  picker: {
    backgroundColor: "#e1f5fe",
    margin: 15,
    width: "100%"
  }
});
