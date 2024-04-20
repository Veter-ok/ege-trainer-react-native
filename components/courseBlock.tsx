import { StyleSheet, View, Text, Pressable} from "react-native";
import { FunctionComponent as FC } from "react";
import {router} from "expo-router"
import { backgroundColor_2, backgroundColor_3 } from "../styles/colors";
import { basicTextStyle } from "../styles/textStyle";
import { ICourse } from "../types/courses";

interface ICourseBlock {
    course: ICourse
}

const CourseBlock:FC<ICourseBlock> = ({course}) => {

    return (
        <Pressable style={style.block} onPress={() => router.push(course.path)}>
            <View style={{width: "30%",justifyContent: "center"}}>
                <View style={{width: 45, height: 45, backgroundColor: "green", borderRadius: 100, marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto"}}></View>
            </View>
            <View style={{width: "50%"}}>
                <Text style={[basicTextStyle, style.textTitle]}>{course.title}</Text>
                <Text style={[basicTextStyle, style.text2]}>{course.description}</Text>
            </View>
            <View style={{width: "20%", justifyContent: "center"}}>
                {/* <View style={{width: 50, height: 50, backgroundColor: backgroundColor_3, marginLeft: "auto", marginRight: "auto"}}>
                    <Text style={[basicTextStyle, {marginTop: "auto", marginBottom: "auto"}]}>Icon</Text>
                </View> */}
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    block: {
        backgroundColor: backgroundColor_2,
        flexDirection: "row-reverse",
        width: "90%",
        marginHorizontal: "5%",
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 15,
        height: 95,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "left",
        marginBottom: 8
    },
    text2: {
        textAlign: "left",
        height: 32,
        fontSize: 13,
    }
})

export default CourseBlock