import { Color, Font, Border } from "./StyleConstants";

const baseTheme = {
  headerContainer: {
    borderBottomWidth: Border.width
  },
  header: {
    marginTop: 50,
    padding: 10
  },
  headerText: {
    ...Font.h1
  },
  subHeaderText: {
    ...Font.subHeader
  },
  bodyContainer: {
    paddingTop: 10,
    flex: 1,
    height: null
  },
  searchAndCardContainer: {
    flex: 1,
    marginBottom: 10
  },
  cardContainer: {
    marginTop: 10,
    padding: 10
  },
  card: {
    marginBottom: 10,
    borderWidth: Border.width,
    flex: 1,
    flexDirection: "row"
  },
  cardImageContainer: {},
  cardDescriptionContainer: {
    padding: 10,
    flex: 1
  },
  cardTitle: {
    ...Font.h2
  },
  cardDescription: {
    ...Font.p,
    paddingTop: 10
  },
  inputText: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 0.2,
    borderRadius: Border.radius
  }
};

export const lightTheme = {
  statusBar: "dark-content",
  headerContainer: {
    ...baseTheme.headerContainer,
    borderBottomColor: Color.lightGray
  },
  header: {
    ...baseTheme.header
  },
  headerText: {
    ...baseTheme.headerText
  },
  subHeaderText: {
    ...baseTheme.subHeaderText
  },
  bodyContainer: {
    ...baseTheme.bodyContainer
  },
  searchAndCardContainer: {
    ...baseTheme.searchAndCardContainer
  },
  cardContainer: {
    ...baseTheme.cardContainer
  },
  card: {
    ...baseTheme.card,
    borderColor: Color.lightGray
  },
  cardImageContainer: {
    ...baseTheme.cardImageContainer
  },
  cardDescriptionContainer: {
    ...baseTheme.cardDescriptionContainer
  },
  cardTitle: {
    ...baseTheme.cardTitle
  },
  cardDescription: {
    ...baseTheme.cardDescription
  },
  inputText: {
    ...baseTheme.inputText,
    color: Color.dimGray,
    borderColor: Color.dimGray
  }
};

export const darkTheme = {
  statusBar: "light-content",
  headerContainer: {
    ...baseTheme.headerContainer,
    backgroundColor: Color.black,
    borderBottomColor: Color.black
  },
  header: {
    ...baseTheme.header
  },
  headerText: {
    ...baseTheme.headerText,
    color: Color.white
  },
  subHeaderText: {
    ...baseTheme.subHeaderText,
    color: Color.white
  },
  bodyContainer: {
    ...baseTheme.bodyContainer,
    backgroundColor: Color.lighterBlack
  },
  searchAndCardContainer: {
    ...baseTheme.searchAndCardContainer
  },
  cardContainer: {
    ...baseTheme.cardContainer
  },
  card: {
    ...baseTheme.card,
    borderColor: Color.lightGray
  },
  cardImageContainer: {
    ...baseTheme.cardImageContainer
  },
  cardDescriptionContainer: {
    ...baseTheme.cardDescriptionContainer
  },
  cardTitle: {
    ...baseTheme.cardTitle,
    color: Color.lightGray
  },
  cardDescription: {
    ...baseTheme.cardDescription,
    color: Color.lightGray
  },
  inputText: {
    ...baseTheme.inputText,
    color: Color.white,
    borderColor: Color.white
  }
};
