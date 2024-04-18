import { View, SafeAreaView, ScrollView, Text } from "react-native";
import CourseBlock from "../components/courseBlock";
import { SubjectButton } from "../components/UI/button";
import Header from "../components/UI/header";
import { backgroundColor_1 } from "../styles/colors";

const CoursesPage = () => {
    // const [] 

    return (
        <View>
            <Header title="Курсы"/>
            <SafeAreaView style={{backgroundColor: backgroundColor_1}}>
            <ScrollView horizontal style={{marginVertical: 20, marginLeft: 20, paddingVertical: 10}}>
                <SubjectButton text="Русс. язык" onPress={() => {}} isActive={true}/>
                <SubjectButton text="Математика" onPress={() => {}} isActive={false}/>
                <SubjectButton text="Информатика" onPress={() => {}} isActive={false}/>
            </ScrollView>
            <ScrollView>
                <CourseBlock title="Задание 9"/>
                <CourseBlock title="Задание 10"/>
                <CourseBlock title="Задание 11"/>
                <CourseBlock title="Задание 12"/>
                <CourseBlock title="Задание 13"/>
            </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default CoursesPage