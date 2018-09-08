import React from "react";
import { View, Text } from "react-native";

const Card = ({ title, theme }) => {
  const { card, cardTitle } = theme;
  return (
    <View style={card}>
      <Text style={cardTitle}>{title}</Text>
    </View>
  );
};

export default Card;
