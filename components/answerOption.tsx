import { FunctionComponent as FC, useEffect, useState } from "react"
import { Text, StyleSheet, Pressable} from "react-native"

interface IAnswerOptionsProps {
    id: number,
    isActive: boolean,
    isCorrect: boolean,
    title: string
    onClick: (option: string) => void
}

const AnswerOptions:FC<IAnswerOptionsProps> = ({id, isActive, isCorrect, title, onClick}) => {
    const [backgroundColor, setBackgroundColor] = useState("white")

    const onPress = () => {
        if (isActive){
            setBackgroundColor(isCorrect ? "green" : "red")
            onClick(title)
        }
    }

    useEffect(() => {
        setBackgroundColor("white")
    }, [id])

    return (
        <Pressable onPress={() => onPress()} style={StyleSheet.compose(style.block, {backgroundColor: backgroundColor})}>
            <Text style={{textAlign: "center", fontSize: 32, width: "100%"}}>{title}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    block: {
        backgroundColor: "#dadded",
        width: "40%",
        marginHorizontal: "5%",
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 20,
        borderRadius: 15,
        height: 70,
        flexDirection: "row"
    },
})

export default AnswerOptions