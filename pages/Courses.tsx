import { View, SafeAreaView, ScrollView } from "react-native";
import CourseBlock from "../components/courseBlock";

const CoursesPage = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CourseBlock title="Задание 9"/>
                <CourseBlock title="Задание 10"/>
                <CourseBlock title="Задание 11"/>
                <CourseBlock title="Задание 12"/>
                <CourseBlock title="Задание 13"/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CoursesPage