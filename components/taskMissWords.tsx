import { SafeAreaView, View, Text } from "react-native"
import { FunctionComponent as FC, useEffect, useState } from "react"
import AnswerOptions from "./answerOption"

interface IMissedLetterProps {
    task: IMissedLatter
}

const MissedLatter:FC<IMissedLetterProps> = ({task}) => {
    const [isCorrect, setIsCorrect] = useState()
    const [isWrong, setIsWrong] = useState()
    const [isActiveOption, setIsActiveOption] = useState(true)

    const checkAnswer = (option: string) => {
        setIsActiveOption(false)
        if (option === task.answer){
            return true
        }
        return false
    }

    useEffect(() => {
        setIsActiveOption(true)
    }, [task])

    return (
        <SafeAreaView>  
            <View style={{marginTop: 30}}>
                <Text style={{textAlign: "center", fontSize: 30, marginVertical: 20}}>{task.title}</Text>
                <View style={{flexDirection: "row"}}>
                    <AnswerOptions id={task.id} isActive={isActiveOption} isCorrect={task.options[0] === task.answer} onClick={checkAnswer} title={task.options[0]}/>
                    <AnswerOptions id={task.id} isActive={isActiveOption} isCorrect={task.options[1] === task.answer} onClick={checkAnswer} title={task.options[1]}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MissedLatter