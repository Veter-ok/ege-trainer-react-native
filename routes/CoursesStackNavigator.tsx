import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoursesPage from "../pages/Courses";
import MissedLatterTaskPage from "../pages/MissedLatterTask";

const Stack = createNativeStackNavigator();

const CoursesStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Курсы" component={CoursesPage}/>
            <Stack.Screen name="MissedLatterTask" component={MissedLatterTaskPage} />
        </Stack.Navigator>
    )
}

export default CoursesStackNavigator