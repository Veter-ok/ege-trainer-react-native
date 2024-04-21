import { View, Text, Pressable} from "react-native"
import { FunctionComponent as FC } from "react"
import { basicTextStyle} from "../../styles/textStyle"
import { backgroundColor_1} from "../../styles/colors"
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { router } from "expo-router"

interface IPropsHeader {
    title: string
    back?: boolean
}

const Header:FC<IPropsHeader> = ({title, back}) => {

    return (
        <View style={{backgroundColor: backgroundColor_1, height: 130, flexDirection: "row"}}>
            {back ? 
            <Pressable onPress={() => router.back()} style={{flexDirection: "row"}}>
                <MaterialIcons style={{marginTop: 75, marginBottom: "auto", marginLeft: 5}} name="keyboard-arrow-left" size={32} color="white" />
                <Text style={[basicTextStyle, {textAlign: "left", marginTop: 72, fontSize: 30}]}>{title}</Text>
            </Pressable>
            :
            <Text style={[basicTextStyle, {textAlign: "left", marginTop: 70, fontSize: 32, marginLeft: 20}]}>{title}</Text>
            }
            <View style={{flexDirection: "row", marginTop: 60, marginBottom: "auto", marginLeft: "auto", marginRight: 20}}>
                <Text style={[basicTextStyle, {width: 160, fontSize: 23, textAlign: "right", marginRight: 5}]}>Родион</Text>
                <MaterialCommunityIcons name="account-circle" size={60} color="white" />
            </View>
        </View>
    )
}

export default Header