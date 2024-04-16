import { SafeAreaView, View, Text } from "react-native"
import { FunctionComponent as FC, useEffect, useState } from "react"
import AnswerOptions from "./answerOption"

interface IMissedLetterProps {
    task: IMissedLatter
}

const MissedLatter:FC<IMissedLetterProps> = ({task}) => {
    const [isCorrect, setIsCorrect] = useState(false)
    const [isActiveOption, setIsActiveOption] = useState(true)

    const checkAnswer = (option: string) => {
        setIsActiveOption(false)
        if (option === task.answer){
            setIsCorrect(true)
        }
        setIsCorrect(false)
    }

    useEffect(() => {
        setIsActiveOption(true)
    }, [task])

    return (
        <SafeAreaView>  
            <View style={{marginTop: 15}}>
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