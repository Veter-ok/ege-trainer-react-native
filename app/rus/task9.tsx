import { SafeAreaView, View } from "react-native"
import { tasks_9 } from "../../data/task9"
import { backgroundColor_1} from "../../styles/styles"
import Header from "../../components/UI/header"
import MissedLatterTaskPage from "../../components/MissedLatterTask"

const Task9 = () => {
    return (
        <View style={{height: "100%", backgroundColor: backgroundColor_1}}>
            <Header title="Задание 9" back={true}/>
            <SafeAreaView>
                <MissedLatterTaskPage wordsForTasks={tasks_9}/>
            </SafeAreaView>
        </View>
    )
}

export default Task9