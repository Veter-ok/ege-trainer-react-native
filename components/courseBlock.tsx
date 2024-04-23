import { StyleSheet, View, Text, Pressable} from "react-native";
import * as Progress from 'react-native-progress';
import { FunctionComponent as FC } from "react";
import {router} from "expo-router"
import { basicTextStyle, backgroundColor_2 } from "../styles/styles";
import { ICourse } from "../types/courses";
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

interface ICourseBlock {
    course: ICourse
}

const Icons = [
    <FontAwesome name="book" size={38} color="white" style={{marginLeft: "auto", marginRight: 20}}/>,
    <MaterialCommunityIcons name="math-integral-box" size={42} color="white" style={{marginLeft: "auto", marginRight: 20}}/>,
    <MaterialIcons name="computer" size={38} color="white" style={{marginLeft: "auto", marginRight: 20}}/>
]


const CourseBlock:FC<ICourseBlock> = ({course}) => {

    return (
        <Pressable style={style.block} onPress={() => router.push(course.path)}>
            <View style={{width: "30%",justifyContent: "center"}}>
                <View style={style.circle}></View>
                <Progress.Pie style={style.circle} progress={0.7} size={50} color="green" borderColor="transparent"/>
            </View>
            <View style={{width: "50%"}}>
                <Text style={[basicTextStyle, style.textTitle]}>{course.title}</Text>
                <Text style={[basicTextStyle, style.text2]}>{course.description}</Text>
            </View>
            <View style={{width: "20%", justifyContent: "center"}}>
                {Icons[course.subject]}
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
    },
    circle: {
        marginLeft: "auto", 
        marginRight: "auto", 
    }
})

export default CourseBlock