import { SafeAreaView, Text, View } from "react-native"
import { getRandomNumber } from "../utils/random"
import { tasks_9 } from "../data/task9"
import {useState } from "react"
import MissedLatter from "../components/taskMissWords"
import { Button } from "../components/UI/button"
import { CheckBox } from "../components/UI/checkBox"
import { isTaskInArray } from "../utils/taskUtils"
import { basicTextStyle} from "../styles/textStyle"

const MissedLatterTaskPage = () => {
    const [tasks, setTasks] = useState<IMissedLatter[]>([])
    const [isTaskStart, setTaskStart] = useState(false)
    const [numberofWords, SetNumberofWords] = useState(10)
    const [indexOfTask, setIndexOfTask] = useState(0)
    const [traningType, setTraningType] = useState(1)
    

    const getNextTask = () => {
        if (tasks.length > indexOfTask + 1){
            setIndexOfTask(prevValue => prevValue + 1)
        }else{
            setTasks([])
            setIndexOfTask(0)
            setTaskStart(false)
        }
    }

    const startTask = () => {
        let newTasks:IMissedLatter[] = []
        for (let i = 0; i < numberofWords; i++) {
            let randomIndex = getRandomNumber(0, tasks_9.length)
            while (isTaskInArray(tasks_9[randomIndex], newTasks)){
                randomIndex = getRandomNumber(0, tasks_9.length)
            }   
            newTasks.push(tasks_9[randomIndex])
        }
        setTasks(newTasks)
        setTaskStart(true)
    }

    return (
        <SafeAreaView style={{height: "100%", backgroundColor: "#19173D"}}>
            {isTaskStart ? 
                <View style={{justifyContent: "center"}}>
                    <Text style={[basicTextStyle, {fontSize: 22, marginTop: 20}]}>{indexOfTask+1}/{tasks.length}</Text>
                    <MissedLatter task={tasks[indexOfTask]}/>
                    <Button text="Дальше" onPress={getNextTask} buttonStyle={{marginLeft: "auto", marginRight: "auto"}}/>
                </View>
                :
                <View style={{height: "100%", alignItems: 'center', paddingTop: 120}}>
                    <View style={{marginTop: 30}}>
                        <Text style={[basicTextStyle, {fontSize: 18}]}>Количество слов</Text>
                        <View style={{flexDirection: "row", marginLeft: "auto", marginRight: "auto", marginTop: 10}}>
                            <CheckBox text="10" value={10} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                            <CheckBox text="20" value={20} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                            <CheckBox text="50" value={50} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                        </View>
                    </View>
                    <View style={{marginTop: 35}}>
                        <Text style={[basicTextStyle, {fontSize: 18}]}>Новые слова</Text>
                        <View style={{flexDirection: "row", marginLeft: "auto", marginRight: "auto", marginTop: 10}}>  
                            <CheckBox text="Новые слова" value={1} currentlyValue={traningType} onPress={setTraningType} buttonStyle={{width: 157}} textStyle={{fontSize: 16, fontWeight: "700"}}/>
                            <CheckBox text="Повторение + новые слова" value={2} currentlyValue={traningType} onPress={setTraningType} buttonStyle={{width: 157}} textStyle={{fontSize: 16, fontWeight: "700"}}/>
                        </View>
                    </View>
                    <Button text="Начать" onPress={startTask} buttonStyle={{position: "absolute", bottom: 10}}/>
                </View>

            }
        </SafeAreaView>
    )
}

export default MissedLatterTaskPage