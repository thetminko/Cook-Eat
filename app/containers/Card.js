import React from "react";
import { View, Text, Image } from "react-native";

const Card = ({ title, image, description, theme }) => {
  const { card, cardTitle, cardDescriptionContainer, cardDescription } = theme;
  return (
    <View style={card}>
      <View>
        <Image source={{ uri: image }} style={{ height: 150, width: 150 }} />
      </View>
      <View style={cardDescriptionContainer}>
        <Text style={cardTitle}>{title}</Text>
        <Text style={cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default Card;
