import { StyleSheet, Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native"
import { FunctionComponent as FC } from "react"
import { backgroundColor_3, textColor2 } from "../../styles/colors"
import { basicTextStyle } from "../../styles/textStyle"

interface IButton {
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    text: string,
    onPress: () => void
}

export const Button:FC<IButton> = ({text, onPress, buttonStyle, textStyle}) => {
    return (
        <Pressable onPress={() => onPress()} style={[style.block1, buttonStyle]}>
            <Text style={[basicTextStyle, {fontSize: 28}, textStyle]}>{text}</Text>
        </Pressable>
    )
}

interface ISubjectButton {
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    text: string,
    isActive: boolean,
    onPress: () => void
}

export const SubjectButton: FC<ISubjectButton> = ({text, onPress, buttonStyle, textStyle, isActive}) => {
    return (
        <Pressable onPress={() => onPress()} style={[isActive ? style.block2Active : style.block2, buttonStyle]}>
            <Text style={[basicTextStyle, isActive ? style.text1 : style.text2, textStyle]}>{text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    block1: {
        backgroundColor: backgroundColor_3,
        width: 150,
        height: 55,
        paddingVertical: 10,
        marginTop: 40,
        borderRadius: 10,
        justifyContent: 'center'
    },
    block2: {
        width: 120, 
        height: 33,
        backgroundColor: "transparent",
        borderRadius: 10,
        justifyContent: 'center'
    },
    block2Active: {
        width: 120, 
        height: 33,
        backgroundColor: backgroundColor_3,
        borderRadius: 10,
        justifyContent: 'center'
    },
    text1: {
        fontWeight: "800",
    },
    text2: {
        color: textColor2,
        fontWeight: "800",
    }
})