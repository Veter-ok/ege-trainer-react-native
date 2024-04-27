import { SafeAreaView, View, Text } from "react-native"
import { useState } from "react"
import Header from "../../components/UI/header"
import { Button } from "../../components/UI/button"
import { backgroundColor_1 } from "../../styles/styles"
import TaskSetting from "../../components/taskSetting"

const Task4 = () => {
    const [isTaskStart, setTaskStart] = useState(false)
    const [numberofWords, SetNumberofWords] = useState(10)
    const [indexOfTask, setIndexOfTask] = useState(0)
    const [traningType, setTraningType] = useState(1)

    const startTask = () => {

    }

    return (
        <View style={{height: "100%", backgroundColor: backgroundColor_1}}>
            <Header title="Задание 4" back={true}/>
            <SafeAreaView>
                {isTaskStart ? 
                    <View style={{justifyContent: "center", paddingTop: 100}}>
                        {/* <Text style={[basicTextStyle, {fontSize: 22, marginTop: 20}]}>{indexOfTask+1}/{tasks.length}</Text>
                        <MissedLatter task={tasks[indexOfTask]}/> */}
                        {/* <Button text="Дальше" onPress={getNextTask} buttonStyle={{marginLeft: "auto", marginRight: "auto"}}/> */}
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

export default Task4