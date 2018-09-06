import React from 'react';
import { View, Text } from 'react-native';

const Card = ({theme}) => {
    const { card } = theme;
    return (
        <View style={card}>
            <Text>Hello</Text>
        </View>
    );
};

export default Card;