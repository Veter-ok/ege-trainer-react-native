import {FunctionComponent as FC} from 'react'
import { View, Text } from "react-native"
import { CheckBox } from "./UI/checkBox"
import { basicTextStyle } from "../styles/styles"
import { Button } from "./UI/button"

interface IPropsTaskSetting {
    numberofWords: number
    SetNumberofWords(value: number): void
    traningType: number,
    setTraningType(value: number): void
    startTask(): void
}

const TaskSetting:FC<IPropsTaskSetting> = ({numberofWords, SetNumberofWords, traningType, setTraningType, startTask}) => {
    return (
        <View style={{height: "100%", alignItems: 'center', paddingTop: 100}}>
            <View style={{marginTop: 30}}>
                <Text style={[basicTextStyle, {fontSize: 18, marginLeft: "auto", marginRight: "auto"}]}>Количество слов</Text>
                <View style={{flexDirection: "row", marginLeft: "auto", marginRight: "auto", marginTop: 10}}>
                    <CheckBox text="10" value={10} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                    <CheckBox text="20" value={20} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                    <CheckBox text="50" value={50} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                </View>
            </View>
            <View style={{marginTop: 35}}>
                <Text style={[basicTextStyle, {fontSize: 18, marginLeft: "auto", marginRight: "auto"}]}>Вид тренировки</Text>
                <View style={{flexDirection: "row", marginLeft: "auto", marginRight: "auto", marginTop: 10}}>  
                    <CheckBox text="Новые слова" value={1} currentlyValue={traningType} onPress={setTraningType} buttonStyle={{width: 157}} textStyle={{fontSize: 16, fontWeight: "700"}}/>
                    <CheckBox text="Повторение + новые слова" value={2} currentlyValue={traningType} onPress={setTraningType} buttonStyle={{width: 157}} textStyle={{fontSize: 16, fontWeight: "700"}}/>
                </View>
            </View>
            <Button text="Начать" onPress={startTask} buttonStyle={{position: "absolute", bottom: 180}}/>
        </View>
    )
}

export default TaskSetting