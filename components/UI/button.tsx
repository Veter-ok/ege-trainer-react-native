import { StyleSheet, Pressable, Text } from "react-native"
import { FunctionComponent as FC } from "react"

interface IButton {
    text: string,
    onPress: () => void
}

export const Button:FC<IButton> = ({text, onPress}) => {
    return (
        <Pressable onPress={() => onPress()} style={style.block}>
            <Text style={{textAlign: "center", fontSize: 32, width: "100%"}}>{text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    block: {
        backgroundColor: "#dadded",
        width: "40%",
        marginHorizontal: "30%",
        paddingVertical: 15,
        marginTop: 40,
        borderRadius: 15,
        height: 70,
        flexDirection: "row"
    },
})