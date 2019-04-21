import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Alert
} from "react-native";

export default class NavigationPage extends Component {
  constructor(props) {
    super(props);
    this.pathElements = this.props.url.split("/");
    this.levels = [this.pathElements[0]];
    for (let i = 1; i < this.pathElements.length; i++) {
      this.levels.push(this.levels[i - 1] + "/" + this.pathElements[i]);
    }
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress() {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", onPress: () => {}, style: "cancel" },
        { text: "Logout", onPress: () => this.handleLogout() }
      ],
      { cancelable: false }
    );

    return true;
  }

  renderLevels() {
    return this.levels.map((level, i) => (
      <View key={i} style={styles.view}>
        <Text style={{ textAlignVertical: "center" }}> > </Text>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.onNavigate(level)}
        >
          <Text style={styles.text}>{this.pathElements[i]}</Text>
        </TouchableOpacity>
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.view}>
        {this.renderLevels()}
        {this.props.children}
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
