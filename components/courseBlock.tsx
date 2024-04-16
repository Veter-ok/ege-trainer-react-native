import { StyleSheet, View, Text, Pressable} from "react-native";
import { FunctionComponent as FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "./UI/button";

interface ICourseBlock {
    title: string
}

const CourseBlock:FC<ICourseBlock> = ({title}) => {
    const navigation = useNavigation()

    return (
        <View style={style.block}>
            <View style={{flexDirection: "row", height: "80%"}}>
                <Text style={style.text1}>{title}</Text>
                <Text style={style.text2}>Progress</Text>
            </View>
            <View style={{flexDirection: "row", height: "20%", width: "100%"}}>
                <Button textStyle={{fontSize: 16}} buttonStyle={style.button} text="go" onPress={() => navigation.navigate('MissedLatterTask')}/>
                <View style={{height: 15, width: "45%", marginLeft: 60, backgroundColor: "green", borderRadius: 10}}></View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    block: {
        backgroundColor: "#dadded",
        width: "90%",
        marginHorizontal: "5%",
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 15,
        height: 120,
    },
    text1: {
        fontSize: 16,
        width: "50%",
        height: 40,
        paddingVertical: 12 
    },
    text2: {
        fontSize: 16,
        width: "50%",
        height: 40,
        paddingVertical: 12 
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