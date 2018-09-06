import { Color, Font, Border } from "./StyleConstants";

const baseTheme = {
    headerContainer: {
        borderBottomWidth: Border.width,
    },
    header : {
        marginTop: 50,
        padding: 10
    },
    headerText: {
        ...Font.h1,
    },
    subHeaderText: {
        ...Font.subHeader
    },
    bodyContainer: {
        paddingTop: 10,
        flex: 1,
        height: null
    },
    cardContainer: {
     marginTop: 10,
     padding: 10,
    },
    card: {
        marginTop: 10,
        padding: 10,
        height: 50,
        borderWidth: Border.width,
    },
    inputText: {
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        height: 40,
        borderWidth: 0.2,
        borderRadius: Border.radius
    }
}

export const lightTheme = {
    statusBar: "dark-content",
    headerContainer: {
        ...baseTheme.headerContainer,
        borderBottomColor: Color.lightGray
    },
    header: {
        ...baseTheme.header,
    },
    headerText: {
        ...baseTheme.headerText,
    },
    subHeaderText: {
        ...baseTheme.subHeaderText
    },
    bodyContainer: {
        ...baseTheme.bodyContainer
    },
    cardContainer: {
        ...baseTheme.cardContainer,
    },
    card: {
        ...baseTheme.card,
        borderColor: Color.lightGray
    },
    inputText: {
        ...baseTheme.inputText
    }
}

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
    cardContainer: {
        ...baseTheme.cardContainer,
    },
    card: {
        ...baseTheme.card,
        borderColor: Color.lightGray
    },
    inputText: {
        ...baseTheme.inputText,
        color: Color.white,
        borderColor: Color.white
    }
}