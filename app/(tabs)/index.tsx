import { SafeAreaView, ScrollView, View } from "react-native";
import Header from '../../components/UI/header'
import { CheckBox } from "../../components/UI/checkBox";
import CourseBlock from "../../components/courseBlock";
import { useEffect, useState } from "react";
import { backgroundColor_1 } from "../../styles/colors";
import { courses, subjects } from "../../data/courses";
import { ICourse } from "../../types/courses";

export default function Page() {
    const [currentlySubject, setCurrentlySubject] = useState(0)
    const [currentlyCourses, setCurrentlyCourses] = useState<ICourse[]>([])

    useEffect(() => {
        const newCurrentlyCourses:ICourse[] = []
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].subject === currentlySubject){
                newCurrentlyCourses.push(courses[i])
            }
        }
        setCurrentlyCourses(newCurrentlyCourses)
    }, [currentlySubject])

    return (
        <View>
            <Header title="Курсы"/>
            <SafeAreaView style={{backgroundColor: backgroundColor_1}}>
                <ScrollView horizontal style={{marginVertical: 20, paddingLeft: 20, paddingVertical: 10}} showsHorizontalScrollIndicator={false}>
                    {subjects.map((subject) => 
                        <CheckBox key={subject.id} text={subject.title} value={subject.id} currentlyValue={currentlySubject} onPress={setCurrentlySubject} buttonStyle={{width: 125, height: 33, borderRadius: 10}} textStyle={{fontWeight: "800", fontSize: 16}}/>
                    )}
                </ScrollView>
                <ScrollView style={{height: "100%"}}>
                    {currentlyCourses.map((course) =>
                        <CourseBlock key={course.id} course={course}/>
                    )}
                </ScrollView>
            </SafeAreaView>
      </View>
    )
}
