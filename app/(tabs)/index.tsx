import { SafeAreaView, ScrollView, View } from "react-native";
import Header from '../../components/UI/header'
import { CheckBox } from "../../components/UI/checkBox";
import CourseBlock from "../../components/courseBlock";
import { useState } from "react";
import { backgroundColor_1 } from "../../styles/colors";

export default function Page() {
  const [activeCourse, setActiveCourse] = useState(0)
    return (
        <View>
            <Header title="Курсы"/>
            <SafeAreaView style={{backgroundColor: backgroundColor_1}}>
            <ScrollView horizontal style={{marginVertical: 20, marginLeft: 20, paddingVertical: 10}} showsHorizontalScrollIndicator={false}>
                <CheckBox text="Русс. язык" value={0} currentlyValue={activeCourse} onPress={setActiveCourse} buttonStyle={{width: 120, height: 33, borderRadius: 10}} textStyle={{fontWeight: "800", fontSize: 16}}/>
                <CheckBox text="Математика" value={1} currentlyValue={activeCourse} onPress={setActiveCourse} buttonStyle={{width: 120, height: 33, borderRadius: 10}} textStyle={{fontWeight: "800", fontSize: 16}}/>
                <CheckBox text="Информатика" value={2} currentlyValue={activeCourse} onPress={setActiveCourse} buttonStyle={{width: 120, height: 33, borderRadius: 10}} textStyle={{fontWeight: "800", fontSize: 16}}/>
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
