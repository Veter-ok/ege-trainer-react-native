import { StyleSheet, Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native"
import { FunctionComponent as FC } from "react"

interface IButton {
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    text: string,
    onPress: () => void
}

export const Button:FC<IButton> = ({text, onPress, buttonStyle, textStyle}) => {
    return (
        <Pressable onPress={() => onPress()} style={StyleSheet.compose(style.block, buttonStyle)}>
            <Text style={StyleSheet.compose(style.text, textStyle)}>{text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    block: {
        backgroundColor: "#a881d4",
        width: "40%",
        // marginHorizontal: "30%",
        paddingVertical: 10,
        marginTop: 40,
        borderRadius: 10,
        height: 55,
        flexDirection: "row"
    },
    text: {
        textAlign: "center", 
        fontSize: 28, 
        width: "100%"
    }
})