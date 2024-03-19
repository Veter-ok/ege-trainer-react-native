import { View, SafeAreaView } from "react-native";
import CourseBlock from "../components/courseBlock";

const CoursesPage = () => {
    return (
        <SafeAreaView>
            <View>
                <CourseBlock title="Задание 9"/>
                <CourseBlock title="Задание 10"/>
                <CourseBlock title="Задание 11"/>
            </View>
        </SafeAreaView>
    )
}

export default CoursesPage