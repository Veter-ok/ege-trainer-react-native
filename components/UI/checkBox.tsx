import { StyleSheet, Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native"
import { FunctionComponent as FC } from "react"
import { backgroundColor_2, backgroundColor_3 } from "../../styles/styles"

interface ICheckBoxProps {
    text: string,
    value: number,
    currentlyValue: number,
    onPress: (a: number) => void
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
}

export const CheckBox:FC<ICheckBoxProps> = ({text, value, currentlyValue, onPress, buttonStyle, textStyle}) => {
    return (
        <Pressable onPress={() => onPress(value)} style={[style.wordNumBlock, buttonStyle, {backgroundColor: currentlyValue == value ? backgroundColor_3 : backgroundColor_2}]}>
            <Text style={[{fontSize: 22, color: "#fff", fontWeight: "600"}, textStyle]}>{text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    wordNumBlock: {
        backgroundColor: "#d7b7f7",  
        marginHorizontal: 5, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 82, 
        height: 40,
        borderRadius:5
    }
})
