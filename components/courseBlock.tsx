import { StyleSheet, View, Text, Pressable} from "react-native";
import { FunctionComponent as FC } from "react";
import {router} from "expo-router"
import { backgroundColor_2, backgroundColor_3 } from "../styles/colors";
import { basicTextStyle } from "../styles/textStyle";

interface ICourseBlock {
    title: string
}

const CourseBlock:FC<ICourseBlock> = ({title}) => {

    return (
        <Pressable style={style.block} onPress={() => router.push('rus/task9')}>
            <View style={{width: "30%",justifyContent: "center"}}>
                <View style={{width: 55, height: 55, backgroundColor: "green", borderRadius: 100, marginLeft: "auto", marginRight: "auto"}}></View>
            </View>
            <View style={{width: "50%"}}>
                <Text style={[basicTextStyle, style.textTitle]}>{title}</Text>
                <Text style={[basicTextStyle, style.text2]}>Ударение</Text>
            </View>
            <View style={{width: "20%", justifyContent: "center"}}>
                <View style={{width: 50, height: 50, backgroundColor: backgroundColor_3, marginLeft: "auto", marginRight: "auto"}}>
                    <Text style={[basicTextStyle, {marginTop: "auto", marginBottom: "auto"}]}>Icon</Text>
                </View>
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
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 15,
        height: 98,
    },
    textTitle: {
        fontSize: 22,
        fontWeight: "500",
        textAlign: "left",
        marginTop: 12 
    },
    text2: {
        textAlign: "left",
        height: 40,
        marginTop: 5
    },
    button: {
        width: 100,
        height: 40,
        paddingVertical: 10,
        marginTop: -15, 
        marginLeft: 5
    }
})

export default CourseBlock