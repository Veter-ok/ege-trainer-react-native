import { StyleSheet, View, Text, Pressable} from "react-native";
import { FunctionComponent as FC } from "react";
import { useNavigation } from "@react-navigation/native";

interface ICourseBlock {
    title: string
}

const CourseBlock:FC<ICourseBlock> = ({title}) => {
    const navigation = useNavigation()

    return (
        <View style={style.block}>
            <Text style={style.text}>{title}</Text>
            <Pressable style={style.button} onPress={() => navigation.navigate('MissedLatterTask')}>
                <Text style={{fontSize: 16}}>GO</Text>
            </Pressable>
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
        height: 70,
        flexDirection: "row"
    },
    text: {
        fontSize: 16,
        width: "50%",
        height: 40,
        paddingVertical: 12 
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#a8b3ed',
        marginLeft: "30%",
        width: 50,
        height: 30,
        marginVertical: 5
    }
})

export default CourseBlock