import { useState, FunctionComponent as FC } from "react"
import { getRandomNumber } from "../utils/random"
import { isTaskInArray } from "../utils/taskUtils"
import { SafeAreaView, View, Text} from "react-native"
import { Button } from "./UI/button"
import MissedLatter from "./taskMissWords"
import TaskSetting from "./taskSetting"
import { basicTextStyle } from "../styles/styles"


interface IPropsMissedLatterTaskPage {
    wordsForTasks: IMissedLatter[]
}

const MissedLatterTaskPage:FC<IPropsMissedLatterTaskPage> = ({wordsForTasks}) => {
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
            let randomIndex = getRandomNumber(0, wordsForTasks.length)
            while (isTaskInArray(wordsForTasks[randomIndex], newTasks)){
                randomIndex = getRandomNumber(0, wordsForTasks.length)
            }   
            newTasks.push(wordsForTasks[randomIndex])
        }
        setTasks(newTasks)
        setTaskStart(true)
    }

    return (
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
    )
}

export default MissedLatterTaskPage