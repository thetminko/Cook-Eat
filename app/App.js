import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import Header from "./components/Header";
import CardList from "./containers/CardList";
import { lightTheme, darkTheme } from "./constants/Themes";

export default class App extends Component {
  constructor() {
    super();
    THEMES = {
      LIGHT_THEME: "light",
      DARK_THEME: "dark"
    };

    DEFAULT_THEME = THEMES.LIGHT_THEME;

    this.state = {
      theme: THEMES.DARK_THEME
    };
  }

  render = () => {
    const { base } = styles;
    let theme = this.state.theme === DEFAULT_THEME ? lightTheme : darkTheme;

    const { statusBar, headerContainer, bodyContainer } = theme;
    return (
      <View style={base}>
        <View style={headerContainer}>
          <StatusBar barStyle={statusBar} hidden={false} />
          <Header title="Cook&Eat" theme={theme} />
        </View>
        <View style={bodyContainer}>
          <CardList theme={theme} />
        </View>
      </View>
    );
  };
}

const styles = {
  base: {
    flex: 1
  }
};
