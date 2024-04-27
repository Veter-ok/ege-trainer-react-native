import { SafeAreaView, View } from "react-native"
import Header from "../../components/UI/header"
import MissedLatterTaskPage from "../../components/MissedLatterTask"
import { backgroundColor_1 } from "../../styles/styles"
import { task_10 } from "../../data/task10"

const Task10 = () => {
    return (
        <View style={{height: "100%", backgroundColor: backgroundColor_1}}>
            <Header title="Задание 10" back={true}/>
            <SafeAreaView>
                <MissedLatterTaskPage wordsForTasks={task_10}/>
            </SafeAreaView>
        </View>
    )
}

export default Task10