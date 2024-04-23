import { SafeAreaView, Text, View } from "react-native"
import {useState } from "react"
import { getRandomNumber } from "../../utils/random"
import { tasks_9 } from "../../data/task9"
import MissedLatter from "../../components/taskMissWords"
import { Button } from "../../components/UI/button"
import { isTaskInArray } from "../../utils/taskUtils"
import { basicTextStyle, backgroundColor_1} from "../../styles/styles"
import Header from "../../components/UI/header"
import TaskSetting from "../../components/taskSetting"

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
        <View style={{height: "100%", backgroundColor: backgroundColor_1}}>
            <Header title="Задание 9" back={true}/>
            <SafeAreaView>
            {isTaskStart ? 
                <View style={{justifyContent: "center", paddingTop: 100}}>
                    <Text style={[basicTextStyle, {fontSize: 22, marginTop: 20}]}>{indexOfTask+1}/{tasks.length}</Text>
                    <MissedLatter task={tasks[indexOfTask]}/>
                    <Button text="Дальше" onPress={getNextTask} buttonStyle={{marginLeft: "auto", marginRight: "auto"}}/>
                </View>
                :
                <TaskSetting 
                    numberofWords={numberofWords}
                    SetNumberofWords={SetNumberofWords}
                    traningType={traningType}
                    setTraningType={setTraningType}
                    startTask={startTask}
                />
            }
            </SafeAreaView>
        </View>
    )
}

export default MissedLatterTaskPage