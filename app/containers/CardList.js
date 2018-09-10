import React, { Component } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import Card from "./Card";
import axios from "axios";
import { AppConfig } from "../constants/AppConfig";

export default class CardList extends Component {
  static DEFAULT_SEARCH_PLACEHOLDER = "Search your favourite food!";

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      search: CardList.DEFAULT_SEARCH_PLACEHOLDER,
      data: []
    };
  }

  componentDidMount() {
    // axios
    //   .get("https://www.food2fork.com/api/search?key=" + AppConfig.API_KEY)
    //   .then(res => {
    //     console.log(res.data.recipes);
    //     this.setState({ data: res.data.recipes });
    //   })
    //   .catch(err => {
    //     alert("Something went wrong! Please try again later!");
    //   });
  }

  onSearchFocus = () => {
    this.setState({ search: "" });
  };

  onSearchBlur = () => {
    if (this.state.search === "") {
      this.resetSearchInput();
    }
  };

  onSearchIntput(val) {
    this.setState({ search: val });
  }

  resetSearchInput = () => {
    this.setState({ search: CardList.DEFAULT_SEARCH_PLACEHOLDER });
  };

  renderRecipes = () => {
    let array = [];
    // return(
    for (var i = 1; i <= 30; i++) {
      array.push(
        <Card
          key={i}
          title={"This is a very long title " + i}
          image={"https://via.placeholder.com/150"}
          description={"Food description " + i}
          theme={this.props.theme}
        />
      );
    }

    return array;

    // return this.state.data.map(d => {
    //   return (
    //     <Card
    //       key={d.title}
    //       title={d.title}
    //       image={d.image_url}
    //       description={d.source_url}
    //       theme={this.props.theme}
    //     />
    //   );
    // });
  };

  render() {
    const {
      inputText,
      searchAndCardContainer,
      cardContainer
    } = this.props.theme;
    return (
      <View style={searchAndCardContainer}>
        <View>
          <TextInput
            style={inputText}
            value={this.state.search}
            onFocus={this.onSearchFocus}
            onBlur={this.onSearchBlur}
            onChangeText={val => this.onSearchIntput(val)}
          />
        </View>
        <ScrollView style={cardContainer}>{this.renderRecipes()}</ScrollView>
      </View>
    );
  }
}
