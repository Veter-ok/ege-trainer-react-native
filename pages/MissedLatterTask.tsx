import { SafeAreaView } from "react-native"
import { getRandomNumber } from "../utils/random"
import { tasks } from "../data/task9"
import {useState } from "react"
import MissedLatter from "../components/taskMissWords"
import { Button } from "../components/UI/button"

const MissedLatterTaskPage = () => {
    const [task, setTask] = useState(tasks[getRandomNumber(0, tasks.length)])

    const getRandomTask = () => {
        let randomIndex = getRandomNumber(0, tasks.length)
        while (task.id === tasks[randomIndex].id){
            randomIndex = getRandomNumber(0, tasks.length)
        }
        setTask(tasks[randomIndex])
    }

    return (
        <SafeAreaView>
            <MissedLatter task={task}/>
            <Button text="Дальше" onPress={getRandomTask}/>
        </SafeAreaView>
    )
}

export default MissedLatterTaskPage