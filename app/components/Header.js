import React from 'react';
import { View, Text } from 'react-native';

const Header = ({title, theme}) => {
    const { header, headerText, subHeaderText } = theme;

    return (
        <View style={header}>
            <Text style={subHeaderText}>{new Date().toLocaleString()}</Text>
            <Text style={headerText}>{title}</Text>
        </View>
    );
}

export default Header;