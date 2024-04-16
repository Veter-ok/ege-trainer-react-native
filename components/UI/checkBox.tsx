import { StyleSheet, Pressable, Text } from "react-native"
import { FunctionComponent as FC } from "react"

interface ICheckBoxProps {
    text: string,
    value: number,
    currentlyValue: number,
    onPress: (a: number) => void
}

export const CheckBox:FC<ICheckBoxProps> = ({text, value, currentlyValue, onPress}) => {
    return (
        <Pressable onPress={() => onPress(value)} style={StyleSheet.compose(style.wordNumBlock, {backgroundColor: currentlyValue == value ? "#b068f7" : "#d7b7f7"})}>
            <Text style={{fontSize: 20}}>{text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    wordNumBlock: {
        backgroundColor: "#d7b7f7",  
        marginHorizontal: 5, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 60, 
        height: 30,
        borderRadius:5
    }
})
