import { View, Text } from "react-native"
import { FunctionComponent as FC } from "react"
import { basicTextStyle} from "../../styles/textStyle"
import { backgroundColor_1} from "../../styles/colors"

interface IPropsHeader {
    title: string
}

const Header:FC<IPropsHeader> = ({title}) => {
    return (
        <View style={{backgroundColor: backgroundColor_1, height: 130}}>
            <Text style={[basicTextStyle, {textAlign: "left", marginTop: 70, fontSize: 32, marginLeft: 20}]}>{title}</Text>
        </View>
    )
}

export default Header