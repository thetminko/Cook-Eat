import React from "react";
import { View, Text } from "react-native";

const Header = ({ title, theme }) => {
  const { header, headerText, subHeaderText, inputText } = theme;

  return (
    <View style={header}>
      <Text style={subHeaderText}>Be a Master Chef!</Text>
      <Text style={headerText}>{title}</Text>
    </View>
  );
};

export default Header;
