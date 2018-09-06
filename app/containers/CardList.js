import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import Card from './Card';
// import axios from 'axios';
import { AppConfig } from '../constants/AppConfig';

export default class CardList extends Component {
    static DEFAULT_SEARCH_PLACEHOLDER = "Search your favourite food!"

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            search: CardList.DEFAULT_SEARCH_PLACEHOLDER,
            data: []
        }
    }

    componentWillMount() {
        // axios.get("https://www.food2fork.com/api/search?key=" + AppConfig.API_KEY)
        // .then(res => {
        //     console.log(res);
        // });
    }

    onSearchFocus = () => {
        this.setState({search: ""})
    }

    onSearchBlur = () => {
        if (this.state.search === "") {
            this.setState({search: CardList.DEFAULT_SEARCH_PLACEHOLDER})
        }
    }

    render() {
        const { inputText, cardContainer } = this.props.theme;
        console.log(cardContainer);
        return (
            <View>
                <View>
                    <TextInput style={inputText} value={this.state.search} onFocus={this.onSearchFocus} onBlur={this.onSearchBlur}></TextInput>
                </View>
                <ScrollView style={cardContainer}>
                    <Card theme={this.props.theme} />
                </ScrollView>
            </View>
        );
    }
}