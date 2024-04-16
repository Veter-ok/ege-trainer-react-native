import { SafeAreaView, Text, View } from "react-native"
import { getRandomNumber } from "../utils/random"
import { tasks_9 } from "../data/task9"
import {useState } from "react"
import MissedLatter from "../components/taskMissWords"
import { Button } from "../components/UI/button"
import { CustomSwitch } from "../components/UI/switch"
import { CheckBox } from "../components/UI/checkBox"
import { isTaskInArray } from "../utils/taskUtils"

const MissedLatterTaskPage = () => {
    const [tasks, setTasks] = useState<IMissedLatter[]>([])
    const [isTaskStart, setTaskStart] = useState(false)
    const [numberofWords, SetNumberofWords] = useState(10)
    const [indexOfTask, setIndexOfTask] = useState(0)
    const [isOldWords, setIsOldWords] = useState(false)
    const [isNewWords, setIsNewWords] = useState(false)

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
        <SafeAreaView>
            {isTaskStart ? 
                <View>
                    <Text style={{textAlign: "center", fontSize: 22, marginTop: 20}}>{indexOfTask+1}/{tasks.length}</Text>
                    <MissedLatter task={tasks[indexOfTask]}/>
                    <Button text="Дальше" onPress={getNextTask}/>
                </View>
                :
                <View>
                    <View style={{flexDirection: "row", marginTop: 30}}>
                        <Text style={{fontSize: 18}}>Количество слов:</Text>
                        <View style={{flexDirection: "row", marginLeft: 5}}>
                            <CheckBox text="10" value={10} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                            <CheckBox text="20" value={20} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                            <CheckBox text="50" value={50} currentlyValue={numberofWords} onPress={SetNumberofWords}/>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 35}}>
                        <Text style={{fontSize: 18}}>Новые слова</Text>
                        <CustomSwitch style={{marginLeft: 49}} onChange={setIsNewWords}/>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 35}}>
                        <Text style={{fontSize: 18}}>Повторение</Text>
                        <CustomSwitch style={{marginLeft: 56}} onChange={setIsOldWords}/>
                    </View>
                    <Button text="Начать" onPress={startTask}/>
                </View>
            }
        </SafeAreaView>
    )
}

export default MissedLatterTaskPage